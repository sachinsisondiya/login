  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js"
  
  import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"
  
  const firebaseConfig = {
    apiKey: "AIzaSyCBVwmRfGcXe3PeAKHdqU08iUD4SzNMFTc",
    authDomain: "login-868b7.firebaseapp.com",
    projectId: "login-868b7",
    storageBucket: "login-868b7.firebasestorage.app",
    messagingSenderId: "307113230710",
    appId: "1:307113230710:web:7e41bb274677c8681f7a57"
  };
  console.log("hii firebase")

  const app = initializeApp(firebaseConfig);
  const signUp = document.getElementById("sign-up")


  const ShowMessage = (message,divId) => {
   const messageDiv = document.getElementById(divId)
   console.log(messageDiv)
   messageDiv.style.display = 'block'
   messageDiv.innerHTML = message
    messageDiv.style.opacity= 1;
   setTimeout(()=>{
       messageDiv.style.opacity= 0;
   },5000)
}

  signUp.addEventListener('click',function(e){
      e.preventDefault();
       
      const firstName = document.getElementById('first-name').value
      const lastName = document.getElementById('last-name').value 
      const email = document.getElementById('sign-up-user-email').value
      const password = document.getElementById('sign-up-user-pass').value
      console.log(email , password)

      const auth = getAuth()
      const db = getFirestore()

      createUserWithEmailAndPassword(auth,email,password)
      .then(function(userCredential){
        const user = userCredential.user
        const userData = {
          email: email,   // we can write email also
          firstName:firstName,
          lastName: lastName// we can writes password also
        }  
        ShowMessage("Account created successfully", "sign-up-message")
        const docRef = doc(db , 'users',user.uid);
        setDoc(docRef ,userData)
        .then(()=>{
          window.location.href = 'index.html'
        })
        .catch((error)=>{
          console.error("error writing document",error)
        })
      })
      .catch((error)=>{
         const errorCode = error.code
         if(errorCode === 'auth/email-already-in-use'){
           ShowMessage('email already exists', 'signUpMessage')
      }
      else{
        ShowMessage('unable to create User', 'signUpMessage')
      }
    })

  })
  const signIn = document.getElementById('sign-in-user')

  signIn.addEventListener('click',(e)=>{
    e.preventDefault()
    const email = document.getElementById('user-email').value
    const password = document.getElementById('user-pass').value
    const auth = getAuth()
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      ShowMessage('LoggedInuserId' , 'sign-in-message' )
      const user = userCredential.user
      localStorage.setItem('loggedInUser',user.uid)
      window.location.href = 'homePage.html'
    })
    .catch((error)=>{
      const errorCode = error.code
      console.log(errorCode)
      if(errorCode === 'auth/invalid-credential'){
        ShowMessage('Incorrect EMAIL OR Password' , 'sign-in-message')
      }
      else{
        ShowMessage('Account does not exist','sign-in-message')
      }
    })

  })

  