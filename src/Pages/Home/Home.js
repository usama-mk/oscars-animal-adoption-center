import React from 'react'
import DonkeyCard from '../../Components/DonkeyCard/DonkeyCard'
import History from '../../Components/History/History'
import './Home.css'
function Home() {
    return (
        <div className="Home" >
            <DonkeyCard/>
            <History/>
        </div>
    )
}

export default Home
