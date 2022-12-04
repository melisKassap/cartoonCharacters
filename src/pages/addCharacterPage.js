import React, { useState, useEffect } from 'react';
import "../style/pages/addPage.scss";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddCharacterPage({ addNewCharacter }) {

  const [nameSurname, setNameSurname] = useState("");
  const [job, setJob] = useState("");
  const [about, setAbout] = useState("");
  const [imageLink, setImageLink] = useState("");
  const charactersData = useSelector(state => state.characterData)
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    charactersData.push({
      "name": nameSurname,
      "avatar": imageLink,
      "job": job,
      "description": about,
      "id": (parseInt((charactersData[charactersData.length - 1]).id)) + 1
    })
    dispatch({ type: "ADD_NEW_CHARACTER_DATA", charactersData });

    navigate('/');

  }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <div className="addPage__container h-100">
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 container no-padding'>
          {loading ? (

            <h4>Loading...</h4>) :
            (

              <form className='formContainer' onSubmit={e => { handleSubmit(e) }}>
                <div className='formContainer__body'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    <label className='col-lg-12 col-md-12 col-sm-12 col-12'>Name Surname:</label>

                    <input
                      className='col-lg-12 col-md-12 col-sm-12 col-12 form__inputContainer'
                      name='nameSurname'
                      type='text'
                      value={nameSurname}
                      onChange={e => setNameSurname(e.target.value)}
                    />
                  </div>

                  <div className='col-lg-12 col-md-12 col-sm-12 col-12'>

                    <label className='col-lg-12 col-md-12 col-sm-12 col-12'>Job Title:</label>

                    <input
                      className='col-lg-12 col-md-12 col-sm-12 col-12 form__inputContainer'
                      name='job'
                      type='text'
                      value={job}
                      onChange={e => setJob(e.target.value)}
                    />
                  </div>

                  <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    <label className='col-lg-12 col-md-12 col-sm-12 col-12'>About Him / Her:</label>

                    <textarea
                      className='col-lg-12 col-md-12 col-sm-12 col-12 form__inputContainerTextArea'
                      rows="4"
                      cols="50"
                      name="about"
                      defaultValue={about}
                      onChange={e => setAbout(e.target.value)}>

                    </textarea>
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    <label className='col-lg-12 col-md-12 col-sm-12 col-12'>Image Link:</label>

                    <input
                      className='col-lg-12 col-md-12 col-sm-12 col-12 form__inputContainer'
                      name='imageLink'
                      type='text'
                      value={imageLink}
                      onChange={e => setImageLink(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                    <input
                      className='btn btn-primary col-lg-12 col-md-12 col-sm-12 col-12 form__inputContainer'
                      type='submit'
                      value='Add Character'
                    />
                  </div>
                </div>
              </form>

            )
          }
        </div>

      </div>
    </>

  )
}

export default AddCharacterPage;