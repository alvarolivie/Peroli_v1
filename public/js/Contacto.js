// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc }from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtfes8VgDiCK_vFFSrF3NmVaOSziNhyks",
  authDomain: "elperoli.firebaseapp.com",
  projectId: "elperoli",
  storageBucket: "elperoli.appspot.com",
  messagingSenderId: "666559542649",
  appId: "1:666559542649:web:21a1ea171f6d3550f6aba8",
  measurementId: "G-LXQHD3YVTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const name = document.getElementById("name");
const mail = document.getElementById("email");
const num = document.getElementById("number");
const message = document.getElementById("message");
const send = document.getElementById("send");

// Add a new document with a generated id.
send.onclick = async () => {
    const docRef = await addDoc(collection(db, "Pedidos"), {
        nombre: name.value,
        email: mail.value,
        personas: num.value,
        datos: message.value 
    });
    console.log("Document written with ID: ", docRef.id);
}