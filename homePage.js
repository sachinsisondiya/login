 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

  import { getAuth, onAuthStateChanged, signOut
  } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js"
  
  import {getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"

   const firebaseConfig = {
    apiKey: "AIzaSyCBVwmRfGcXe3PeAKHdqU08iUD4SzNMFTc",
    authDomain: "login-868b7.firebaseapp.com",
    projectId: "login-868b7",
    storageBucket: "login-868b7.firebasestorage.app",
    messagingSenderId: "307113230710",
    appId: "1:307113230710:web:7e41bb274677c8681f7a57"
  };
   

  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getFirestore()

  onAuthStateChanged(auth,(user)=>{
    const loggedInUserId = localStorage.getItem('loggedInUser')
    console.log(user)
    if(loggedInUserId){
      const docRef = doc(db, 'users',loggedInUserId)
      getDoc(docRef)
      .then((docSnap)=>{
        
        if(docSnap.exists()){
         const userData = docSnap.data()
        document.getElementById('logout-first-name').innerHTML =userData.firstName
        document.getElementById('logout-last-name').innerHTML = userData.lastName
        document.getElementById('logout-email').innerHTML = userData.email
        }
        else{
          console.log('no document found')
        }
       
      }) 
      .catch((error)=>{
        console.log('Error getting document');
      }) 
    }
    else{
      console.log('user id not found in local storage')
    }
  })
    const logOutButton = document.getElementById('logout-button')

    logOutButton.addEventListener('click',()=>{
      localStorage.removeItem('loggedInUser')
      signOut(auth)
      .then(()=>{
        window.location.href = 'index.html'
      })
      .catch(()=>{
        console.error('Error signing out',error)
      })
    })

  