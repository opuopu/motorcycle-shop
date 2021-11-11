import { GoogleAuthProvider,getAuth, signInWithPopup, onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";

import { useEffect, useState } from "react";

import Initialize from "../config/Init";


Initialize()
const Usefirebase = () =>{
    const [user,setuser] = useState({})
    // const[email,setemail] = useState('')
    // const[password,setpassword] = useState('')
const[isLoading,setLoading] = useState(true)
const [error,seterror] = useState('')
const [admin,setadmin] = useState(false)



const auth = getAuth()
const googleprovider = new GoogleAuthProvider()
//----------------- google log in-----------------
const googlesign = (location,history) =>{
    setLoading(true)
 signInWithPopup(auth,googleprovider)
.then(result=>{
    const user = result.user 
    setuser(user) 
    saveUser(user?.email,user?.displayName,"PUT")
     const redirect_url = location?.state?.from || '/'
    history.push(redirect_url)
    seterror('')
   
})
.catch(err=>{
seterror(err.message)
})
.finally(()=>setLoading(false))

  }

// -----------------------  createuser-------------------

const registerUser = (email, password,name,history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const  user = result.user
            setuser(user)

            seterror('')
            updateProfile(auth.currentUser, {
                displayName:name
              }).then(() => {
   
              })
            
              saveUser(email,name,"POST")
              history.push('/home')
             
        })
        .catch((err) => {
            seterror(err.message)
         
        })
        .finally(() => setLoading(false));
}
// 
// onauthchange
// useEffect(()=>{
    
      
//     const unsubscribe=  onAuthStateChanged(auth,user=>{
//           if(user){
//               setuser(user)
           
//           }
//           else{
//               setuser({})
             
//           }
//           setLoading(false)
      
//       })
//       return ()=> unsubscribe
    
//   },[auth])
//   -----------------------save user to database-------------
  const saveUser = (email,displayName,method) =>{
const user = {email,displayName}

fetch(`https://intense-chamber-13019.herokuapp.com/adduser`,{
    method:method,
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(user)
    
})
.then(res =>res.json())
    .then(data =>{})
}
// -------------------sign in   user-------
const signinuser = (email,password,location,history) =>{
    setLoading(true)
  
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user 
        setuser(user)
        const redirect_url = location?.state?.from || '/'
        history.push(redirect_url)
        seterror('')
    })
    .catch((err)=>{
        seterror(err.message)
    })
    .finally(()=> setLoading(false))
}


useEffect(()=>{
    
      
    const unsubscribe=  onAuthStateChanged(auth,user=>{
          if(user){
              setuser(user)
           
          }
          else{
              setuser({})
             
          }
          setLoading(false)
      
      })
      return ()=> unsubscribe
    
  },[auth])
// ----------------cheek admin-----------------

useEffect(()=>{

fetch(`https://intense-chamber-13019.herokuapp.com/user/${user?.email}`)
.then(res =>res.json())
.then(data =>
    { 
        setadmin(data.admin)
     
 
    })
},[user?.email])

// logoout

const Signout = () =>{
    setLoading(true)
    signOut(auth)
    .then(()=>{
        setuser({})
    })
    .catch(err =>{

    })
    .finally(()=>setLoading(false))

    // saveuser to database
    
}

return {googlesign,isLoading,user,Signout,registerUser,signinuser,admin,error}

}


export default Usefirebase