import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signinForm = document.querySelector("#login-form")

signinForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = signinForm["login-email"].value
    const password = signinForm["login-password"].value

    try{
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        
        bootstrap.Modal.getInstance(document.querySelector('#signinModal')).hide()

        showMessage("Welcome "+ credentials.user.email)
    }
    catch(error){
        if(error.code === "auth/wrong-password"){
            showMessage("Wrong password", "error")
        }
        else if(error.code === "auth/user-not-found"){
            showMessage("User not found", "error")
        }
        else{
            showMessage(error.message, "error")
        }
    }
})