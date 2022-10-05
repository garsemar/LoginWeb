import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyAGzdNec_kxw13Gbtxd2oD1HZzFTzHx_SY",
    authDomain: "backend-68d98.firebaseapp.com",
    projectId: "backend-68d98",
    storageBucket: "backend-68d98.appspot.com",
    messagingSenderId: "928435423767",
    appId: "1:928435423767:web:e51c844e4b5a0b86f42a52"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)