import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js'

const signinForm = document.querySelector("#login-form")

signinForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = signinForm["login-email"].value
    const password = signinForm["login-password"].value

    try{
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
    }
    catch(error){
        console.log(error)
    }
})