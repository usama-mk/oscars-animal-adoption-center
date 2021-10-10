import React from 'react'
import DonkeyCard from '../DonkeyCard/DonkeyCard'
import History from '../History/History'
import './DonkeyDetailed.css'

function DonkeyDetailed() {
    return (
        <div className="DonkeyDetailed">
            <DonkeyCard/>
            <History/>
        </div>
    )
}

export default DonkeyDetailed
