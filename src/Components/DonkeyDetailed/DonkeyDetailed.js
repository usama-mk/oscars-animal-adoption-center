import React from 'react'
import DonkeyCard from '../DonkeyCard/DonkeyCard'
import History from '../History/History'
import './DonkeyDetailed.css'

function DonkeyDetailed({name, breed, specie, type, description, month, year, color, age, notes, status, before, image}) {
   
    return (
        <div className="DonkeyDetailed">
            <DonkeyCard name={name} specie= { specie} breed={ breed} type={ type} description={ description} month={ month} year={ year} color={ color} age={ age} notes={ notes} status={ status} before={ before} image={image}  />
            <History/>
        </div>
    )
}

export default DonkeyDetailed
