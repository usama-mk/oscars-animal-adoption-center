import React from 'react'
import './DonkeyHeader.css'

function DonkeyHeader({datex, monthx, yearx}) {
    return (
        <div className="DonkeyHeader">
            <div className="dHeaderDate">
               | Intake Date: <span style={{fontWeight: 'bold'}} >
               {`${datex} / ${monthx} / ${yearx}`}
                   </span> 
            </div>
        </div>
    )
} 

export default DonkeyHeader
