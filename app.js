const registerForm = document.getElementById('first-form')
const signInForm = document.getElementById('second-form')
const signIn = document.getElementById('sign-in')
const signUp  = document.getElementById('sign-up-user')


signInForm.style.display = 'none'

const Show = (message,divId) => {
   const messageDiv = document.getElementById(divId)
   messageDiv.style.display = 'block'
   messageDiv.innerHTML = message
    messageDiv.style.opacity= 1;
   setTimeout(()=>{
       messageDiv.style.opacity= 0;
   },5000)
}

signUp.addEventListener('click',()=>{
  signInForm.style.display = 'none'
  registerForm.style.display = 'block'
})

signIn.addEventListener('click',()=>{
  registerForm.style.display = 'none'
  signInForm.style.display = 'block'
})