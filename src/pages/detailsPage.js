import React, { useEffect, useState } from "react";
import "../style/pages/detailPage.scss"
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function DetailsPage(props) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacter] = useState([]);
  const { id } = useParams();
  const charactersData = useSelector(state => state.characterData)
  

  const foundCharacterData = charactersData.find(obj => {
    return obj.id === id;
  });

  useEffect(() => {
    setCharacter(foundCharacterData)
    setLoading(false);
  }, [id]);


  return (
    <>
      <div className="detailPage__container h-100">
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 container no-padding'>
          {loading ? (

            <h4>Loading...</h4>) :
            (

              <div className="detail__container">
                <div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center avatar__icon">
                    <img src={characters ? (characters.avatar ? (((characters.avatar).split("png"))[0] + `png`) :"-") :"-"} title={characters.name} alt={characters.name} />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 avatar__title text-center">
                    <h1 className="title">{characters.name}</h1>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 avatar__job text-center">
                    <label className='avatar__jobName'>{characters.job}</label>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 avatar__detail">
                    <p>{characters.description}</p>
                  </div>
                </div>
              </div>

            )
          }
        </div>

      </div>
    </>
  );
}

export default DetailsPage;
