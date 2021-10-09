import React from 'react'
import './History.css'

function History() {
    return (
        <div className="History borderAround">
            <div className="historyHeader greyBG pl5 whiteText">
                Oscar's Place History
            </div>

            {/* personality */}
            <div className="personalityWrapper flex">
                <div className="personality flex jc mg20 plr10 wFit bgGrey">
                    Personality: 
                </div>

                <div className="personalityText greyText">
                    Click or tap here to enter text.
                </div>
            </div>

            {/* Bonded Companion */}

            <div className="Bonded borderAround flex">
                <div className="BondedC borderAround wFit plr10  ">
                    Bonded Companion:
                </div>
                <div className="bondedText mr40P pl5">
                    Delores
                </div>

                <div className="Pasture borderAround wFit plr10  ">
                    Pasture:
                </div>
                <div className="pastureText pl5">
                    Back Pasture
                </div>
            </div>
        </div>
    )
}

export default History
