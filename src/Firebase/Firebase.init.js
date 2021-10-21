import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
// const initializeAuthentication = () =>{
//     initializeApp (firebaseConfig ) 
// }
// export default initializeAuthentication;
const firebaseInitialize = () => {
    initializeApp (firebaseConfig ) 
}

export default firebaseInitialize; 
 