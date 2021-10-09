import React from 'react'
import DonkeyHeader from '../DonkeyHeader/DonkeyHeader'
import DonkeyPostInfo from '../DonkeyPostInfo/DonkeyPostInfo'
import './DonkeyCard.css'

function DonkeyCard() {
    return (
        <div className="DonkeyCard">
            <DonkeyHeader/>
            <DonkeyPostInfo/>
        </div>
    )
}

export default DonkeyCard
