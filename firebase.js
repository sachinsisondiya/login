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

  const app = initializeApp(firebaseConfig);
  const login = document.getElementById("login")

  login.addEventListener('click',function(e){
      e.preventDefault();

      const email = document.getElementById('user-email').value
      const password = document.getElementById('user-pass').value
      console.log(email , password)

      const auth = getAuth()
      const db = getFirestore()

      createUserWithEmailAndPassword(auth,email,password)

      .the(function(userCredential){
        const user = userCredential.user
        const userData = {
          email: user.email,   // we can write email also
          password:user.password// we can writes password also
        };
      })
  })