import { signOut } from '@firebase/auth'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setAnimals, setUser } from '../../actions'
import DonkeyDetailed from '../../Components/DonkeyDetailed/DonkeyDetailed'
import { auth, db } from '../../firebase'
import { collection, getDocs } from "firebase/firestore";
import './Home.css'
function Home() {
  const posts= useSelector(state => state.animals)
  const user= useSelector(state => state.user)
  const dispatch= useDispatch()
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null))
      console.log(user)
      // push
    }).catch((error) => {
      // An error happened.
    });
  };

  useEffect(async()=>{
    const querySnapshot = await getDocs(collection(db, "animalsPost"));
    // querySnapshot.forEach((doc) => {
    //       console.log(doc.id, doc.data());
           
    //     })
     var temp=[]

  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());

   temp.push({
    id: doc.id,
    data: doc.data()
  })
  })
  dispatch(setAnimals(temp))
  },[])
    return (
        <div className="Home" >
            {
              user?.user && <Button onClick={handleLogout} >Logout</Button>
            }
          {
            posts.map((post, key)=>{
              return <DonkeyDetailed key={key} name={post.data.name} specie= {post.data.specie} breed={post.data.breed} type={post.data.type} description={post.data.description} month={post.data.month} year={post.data.year} color={post.data.color} age={post.data.age} notes={post.data.notes} status={post.data.status} before={post.data.before} image={post.data.image} id={post.id} />
            })
          }
        </div>
    )
}

export default Home
