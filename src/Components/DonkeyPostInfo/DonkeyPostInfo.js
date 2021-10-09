import React from "react";
import "./DonkeyPostInfo.css";
import home from '../../assets/home.jpg'

function DonkeyPostInfo() {
  return (
   <div className="DPIWrapper">
        <div className="DonkeyPostInfo">
      <div className="nameWrapper">
        <div className="infoName">Name:</div>
        <h3 className="name">Bertha- Adopted</h3>
      </div>

      <div className="nameWrapper">
        <div className="infoName">Species:</div>
        <div className="specie">Equine</div>
        <div className="separator">|</div>

        <div className="infoName">Breed: </div>
        <div className="specie">Donkey</div>
      </div>


    <div className="dChecks">
       <div className="check">
       <div className="customCheck "></div>
       <label className="checkLabel" htmlFor="">Jack</label>
       </div>
       

       <div className="check">
       <div className="customCheck checkTrue"></div>
       <label className="checkLabel" htmlFor="">Jenny</label>
       </div>


       <div className="check">
       <div className="customCheck "></div>
       <label className="checkLabel" htmlFor="">Gelding</label>
       </div>

       {/* colors */}

       <div className="dColors">
           <div className="dColorsLabel">
           Colors:
               </div>
            <div className="dColorNames">
                Dark Brown, Long Hair
            </div>
       </div>
    </div>

    {/* DESCRIPTION */}

      <div className="nameWrapper">
          <div className="dDesc">
              Description:
          </div>

          <div className="dDescText">
              | Large
          </div>
      </div>

      {/* Birth Info */}

      <div className="nameWrapper">
          <div className="birthInfo">
              Birth Info
          </div>

          <div className="birthTable">
            <div className="month">
            <div className="monthNum">
                    1
              </div>
              <br />
              <div className="monthLabel">
                    Month
              </div>
            </div>

            <div className="month">
            <div className="monthNum">
                    2016
              </div>
              <br />
              <div className="monthLabel">
                    Year
              </div>
            </div>
            
            <div style={{border:'none'}} className="month">
            <div className="monthNum">
                    5
              </div>
              <br />
              <div className="monthLabel">
                    Age
              </div>
            </div>
          </div>
 
      </div>

{/* Intake Notes */}

<div className="notes">
<div className="intakeNotes">
    Intake Notes
    </div>

    <div className="notesText">
        About 8 months pregnant
    </div>
</div>


      {/* Beneath ends Animal info */}
    </div>

    
    <div className="imageWrapper">
        <img className='animalImage' src={home}  alt="" />
        
        <div className="border">
       <div className="borderBackground"></div>
       </div>

    </div>
    {/* Ends wrapper */}
   </div>
  );
}

export default DonkeyPostInfo;
