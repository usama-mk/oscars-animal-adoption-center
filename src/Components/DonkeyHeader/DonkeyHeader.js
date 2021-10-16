import React from 'react'
import './DonkeyHeader.css'

function DonkeyHeader({datex, monthx, yearx}) {
    return (
        <div className="DonkeyHeader">
            <div className="dHeaderDate">
               | Intake Date: {`${datex} / ${monthx} / ${yearx}`}
            </div>
        </div>
    )
} 

export default DonkeyHeader
