const registerForm = document.getElementById('first-form')
const signInForm = document.getElementById('second-form')
const signIn = document.getElementById('sign-in')
const signUp  = document.getElementById('sign-up-user')


signInForm.style.display = 'none'

signUp.addEventListener('click',()=>{
  signInForm.style.display = 'none'
  registerForm.style.display = 'block'
})

signIn.addEventListener('click',()=>{
  registerForm.style.display = 'none'
  signInForm.style.display = 'block'
})