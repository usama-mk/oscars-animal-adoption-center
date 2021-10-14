import { signOut } from '@firebase/auth'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setUser } from '../../actions'
import DonkeyDetailed from '../../Components/DonkeyDetailed/DonkeyDetailed'
import { auth } from '../../firebase'
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
    return (
        <div className="Home" >
            {
              user?.user && <Button onClick={handleLogout} >Logout</Button>
            }
          {
            posts.map((post)=>{
              return <DonkeyDetailed name={post.name} specie= {post.specie} breed={post.breed} type={post.type} description={post.description} month={post.month} year={post.year} color={post.color} age={post.age} notes={post.notes} status={post.status} before={post.before} image={post.image}  />
            })
          }
        </div>
    )
}

export default Home
