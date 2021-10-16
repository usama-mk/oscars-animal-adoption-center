import React from "react";
import "./DonkeyPostInfo.css";
import home from '../../assets/home.jpg'

function DonkeyPostInfo({name, breed, specie, type, description, month, year, color, age, notes, image}) {
 console.log(type)
  return (
   <div className="DPIWrapper">
        <div className="DonkeyPostInfo">
      <div className="nameWrapper">
        <div className="infoName">Name:</div>
        <h3 className="name overflowY"> {name}</h3>
      </div>

      <div className="nameWrapper">
        <div className="infoName">Species:</div>
        <div className="specie overflowY">{specie}</div>
        <div className="separator">|</div>

        <div className="infoName">Breed: </div>
        <div className="specie overflowY">{breed}</div>
      </div>


    <div className="dChecks">
       <div className="check">
       <div className={`customCheck ${type==="Jack"? 'checkTrue' :''} `}></div>
       <label className="checkLabel" htmlFor="">Jack</label>
       </div>
       

       <div className="check">
       <div className={`customCheck ${type==="Jenny"? 'checkTrue' :''} `}></div>
       <label className="checkLabel" htmlFor="">Jenny</label>
       </div>


       <div className="check">
       <div className={`customCheck ${type==="Gelding"? 'checkTrue' :''} `}></div>
       <label className="checkLabel" htmlFor="">Gelding</label>
       </div>

       {/* colors */}

       <div className="dColors">
           <div className="dColorsLabel">
           Colors:
               </div>
            <div className="dColorNames overflowY">
                {color}
            </div>
       </div>
    </div>

    {/* DESCRIPTION */}

      <div className="nameWrapper">
          <div className="dDesc">
              Description:
          </div>

          <div className="dDescText overflowY">
              | {description}
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
                    {month}
              </div>
              <br />
              <div className="monthLabel">
                    Month
              </div>
            </div>

            <div className="month">
            <div className="monthNum">
                    {year}
              </div>
              <br />
              <div className="monthLabel">
                    Year
              </div>
            </div>
            
            <div style={{border:'none'}} className="month">
            <div className="monthNum">
                    {age}
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

    <div className="notesText overflowY">
        {notes}
    </div>
</div>


      {/* Beneath ends Animal info */}
    </div>

    
    <div className="imageWrapper">
        <img className='animalImage' src={image?image:home}  alt="" />
        
        <div className="border">
       <div className="borderBackground"></div>
       </div>

    </div>
    {/* Ends wrapper */}
   </div>
  );
}

export default DonkeyPostInfo;
