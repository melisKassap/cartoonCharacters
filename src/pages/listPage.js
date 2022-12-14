
import React, { useState, useEffect } from 'react'
import "../style/pages/listPage.scss"
import { BsArrowUpCircle, BsArrowDownCircle, BsTrash, BsPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { getCharactersData } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ListPage() {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const charactersData = useSelector(state => state.characterData)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      if (charactersData.length > 0) {
        setLoading(false);
      } else {
        try {
          await getCharactersData().then((res) => setPosts(res.data))
          setTimeout(() => {
            setLoading(false);
          }, 300);
        } catch (e) {
          setLoading(true)
        }
      }


    }
    loadPost();
  }, []);

  const setStorageData = () => {
    if (posts.length > 0) {
      dispatch({ type: "GET_CHARACTER_DATA", posts })
    }
  }
  setStorageData();

  const deleteCharacters= (id) =>{
    const objWithIdIndex = charactersData.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
      charactersData.splice(objWithIdIndex, 1);
    }
    dispatch({ type: "UPDATE_CHARACTER_DATA", charactersData });
    navigate('/');
    return charactersData;
  }

  const reorderArray = (event, originalArray) => {
    const movedItem = originalArray.find((item, index) => index === event.oldIndex);
    const remainingItems = originalArray.filter((item, index) => index !== event.oldIndex);
  
    const reorderedItems = [
        ...remainingItems.slice(0, event.newIndex),
        movedItem,
        ...remainingItems.slice(event.newIndex)
    ];
  
    return reorderedItems;
  }

  function changeSelectItemIndex(index, direction) {
    setPosts(reorderArray({oldIndex: index, newIndex: index + (direction === "UP" ? (-1) : 1)}, charactersData));
  }

  return (
    <>
      <div className="listPage__container">
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 container no-padding'>
          {loading ? (

            <h4>Loading...</h4>) :
            (charactersData.map((item, key) =>

              <div className="d-flex list__container" key={key}>
                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                  <span>{key}</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 avatar__context">
                  <img className='avatarIcon' src={((item.avatar).split("png"))[0] + `png`} alt={item.name} title={item.name} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-5 col-5 avatarName__context text-left">
                  <Link to={`/details/` + item.id}> <label className='name'>{item.name}</label></Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-4 avatar__settings d-flex">
                  <span className='up__icon' onClick={() => changeSelectItemIndex(key, "UP")}><BsArrowUpCircle /></span>
                  <span className='down__icon'onClick={() => changeSelectItemIndex(key, "DOWN")}><BsArrowDownCircle /></span>
                  <span className='trash__icon' onClick={()=>{deleteCharacters(item.id)}}><BsTrash /></span>
                </div>

              </div>
            )
            )
          }
        </div>
        <div className='addCharacterButton'> <Link to={`/add`}> 
        <span className='name' title='Add New Character' alt="Add New Character"><BsPlusCircleFill/></span>
        {/* <label className='name'>Add New Character</label> */}
        </Link></div>

      </div>
    </>
  );
}

export default ListPage;