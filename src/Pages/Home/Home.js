import React from 'react'
import { useSelector } from 'react-redux'
import DonkeyDetailed from '../../Components/DonkeyDetailed/DonkeyDetailed'
import './Home.css'
function Home() {
  const posts= useSelector(state => state.animals)
    return (
        <div className="Home" >
            
          {
            posts.map((post)=>{
              return <DonkeyDetailed/>
            })
          }
        </div>
    )
}

export default Home
