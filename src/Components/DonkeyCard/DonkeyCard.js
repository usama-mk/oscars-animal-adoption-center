import React from 'react'
import DonkeyCardFooter from '../DonkeyCardFooter/DonkeyCardFooter'
import DonkeyHeader from '../DonkeyHeader/DonkeyHeader'
import DonkeyPostInfo from '../DonkeyPostInfo/DonkeyPostInfo'
import './DonkeyCard.css'

function DonkeyCard() {
    return (
        <div className="DonkeyCard">
            <DonkeyHeader/>
            <DonkeyPostInfo/>
            <DonkeyCardFooter/>
        </div>
    )
}

export default DonkeyCard
