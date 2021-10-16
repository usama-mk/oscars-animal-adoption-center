import { deleteDoc, doc } from '@firebase/firestore'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { db } from '../../firebase'
import DonkeyCard from '../DonkeyCard/DonkeyCard'
import History from '../History/History'
import './DonkeyDetailed.css'

function DonkeyDetailed({name, breed, specie, type, description, month, year, color, age, notes, status, before, image, id, datex, monthx, yearx}) {
  const admin= useSelector(state => state.user.admin)

  const deletePost=async()=>{
    await deleteDoc(doc(db, "animalsPost", id));
  }
   
    return (
        <div className="DonkeyDetailed">
            {
                admin && 
                <Button onClick={deletePost} style={{backgroundColor: 'red'}} >
                    Delete
                </Button>
            }
            <DonkeyCard name={name} specie= { specie} breed={ breed} type={ type} description={ description} month={ month} year={ year} color={ color} age={ age} notes={ notes} status={ status} before={ before} image={image} id={id} datex={datex} monthx={monthx} yearx={yearx}  />
            <History id={id} />
        </div>
    )
}

export default DonkeyDetailed
