import React, {useEffect, useState} from "react";
import "../style/pages/detailPage.scss"


function DetailsPage(props) {
 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
    <div className="detailPage__container">
      <div className='col-lg-12 col-md-12 col-sm-12 col-12 container no-padding'>
        {loading ? (

          <h4>Loading...</h4>) :
          (

            <div className="detail__container">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center avatar__icon">
                <img src="https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png" title="" alt=""/>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 avatar__title text-center">
                <h1 className="title">Homer Simpson</h1>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 avatar__job text-center">
                <label className='avatar__jobName'>Nuclear Safety Inspector</label>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 avatar__detail">
               <p>Homer Jay Simpson (born May 12, 1956) is the main protagonist and one of 
                the five main characters of The Simpsons series (or show).
                 He is the spouse of Marge Simpson and father of Bart, Lisa and 
                 Maggie Simpson. Homer is overweight (said to be ~240 pounds), 
                 lazy, and often ignorant to the world around him. Although Homer has 
                 many flaws, he has shown to have great caring, love, and even bravery 
                 to those he cares about and, sometimes, even others he doesn't. He also
                  serves as the main protagonist of the The Simpsons Movie. He is 39 years 
                  old and was born in 1956.</p>
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
