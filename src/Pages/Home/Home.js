import { signOut } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setAdmin, setAnimals, setEditor, setUser } from '../../actions'
import SearchBox from '../../Components/SearchBox/SearchBox'
import DonkeyDetailed from '../../Components/DonkeyDetailed/DonkeyDetailed'
import TinderCard from 'react-tinder-card'
import { auth, db } from '../../firebase'
import {orderBy, collection, getDocs, onSnapshot, query, doc, getDoc } from "firebase/firestore";
import './Home.css'
import { useHistory } from 'react-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom'
import { SwipeableDrawer } from '../../../../posts-app/node_modules/@material-ui/core'
import logoTitleTransparentBg from '../../assets/logoTitleTransparentBg.png'

function Home() {
  const posts= useSelector(state => state.animals)
  const user= useSelector(state => state.user.user)
  const admin= useSelector(state => state.user.admin)
  const editor= useSelector(state => state.user.editor)
  const [searchField, setSearchField]= useState('')
  const [uid, setUid]= useState('')
  const auth = getAuth();
  const history= useHistory()
  const dispatch= useDispatch()
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      history.push('./registration')
      dispatch(setUser(null))
      console.log(user)
      // push
    }).catch((error) => {
      // An error happened.
    });
  };

  const authListener = () => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    var uid= user.uid
    setUid(uid)
    dispatch(setUser(user))
    
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(setUser(''))
    var uid= ''

  }
});
  };
  useEffect(async()=>{
    authListener()
    console.log(user)
     

  //real time get posts
  const q = query(collection(db, "animalsPost"), orderBy('time'));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const tempPosts = [];
  querySnapshot.forEach((doc) => {
    tempPosts.push({
      id: doc.id,
      data: doc.data()
    });
  });
  // console.log("Current cities in CA: ", tempComments);
  dispatch(setAnimals(tempPosts.reverse()))
});


  // get admin editor
  const docRef = doc(db, "users", auth.currentUser?auth.currentUser.uid:'asd');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  dispatch(setAdmin(docSnap.data().admin))
  dispatch(setEditor(docSnap.data().editor))
  // console.log(user)
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  dispatch(setAdmin(''))
  dispatch(setEditor(''))
}
  },[admin, editor])
  const filteredPosts= posts.filter((post)=>{
    return post.data.name.toLowerCase().includes(searchField.toLowerCase()) || post.data.status.toLowerCase().includes(searchField.toLowerCase())
})

    return (
        <div className="Home" >
            {
              user && <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}} >
                <Button onClick={handleLogout} >Logout</Button>
              <br />
              {
                admin && 
                <Link to="/createcard" >
              <Button>Create Post</Button>
              </Link>
              }

              <div>
                <SearchBox setSearchField={setSearchField} />
              </div>

              <div className="logo">
                <img src={logoTitleTransparentBg} alt="" width='400' height= '400'  />
              </div>
              </div>
            }
          {
            filteredPosts.map((post, key)=>{
              return (
               
                    <DonkeyDetailed key={key} name={post.data.name} specie= {post.data.specie} breed={post.data.breed} type={post.data.type} description={post.data.description} month={post.data.month} year={post.data.year} color={post.data.color} age={post.data.age} notes={post.data.notes} status={post.data.status} before={post.data.before} image={post.data.image} id={post.id} date={post.data.date} datex={post.data.datex} monthx={post.data.monthx} yearx={post.data.yearx}  />
               
              )
            })
          }
        </div>
    )
}

export default Home
