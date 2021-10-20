// // import { useState } from "react"
// // import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// // const useFirebase = () =>{
// //     const [user, setUser] = useState({})
// // }


// import { useEffect, useState } from 'react';
// import { onAuthStateChanged, signOut, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.init'


// initializeAuthentication();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [error, setError] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoadding, setIsLoadding] = useState(true);
//     const [isLogin, setIsLogin] = useState(false);

//     const auth = getAuth();

//     const signInUsingGoogle = () => {
//         setIsLoadding(true);
//         const googleProvider = new GoogleAuthProvider();

//         // Google Signin
//         return signInWithPopup(auth, googleProvider)
//             .catch(error => {
//                 setError(error.message)
//             }).finally(() => setIsLoadding(false));
//     }

//     // Checkbox toggle handler
//     const toggle = e => {
//         setIsLogin(e.target.checked)
//         console.log(e.target.checked)
//     }
//     // Checkbox toggle handler


//     // ------------Custom Email Password----------
//     const handleEmailChange = e => {
//         setEmail(e.target.value);
//     }

//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }

//     const handleRegistration = e => {
//         e.preventDefault();
//         console.log(email, password);

//         if (password.length < 6) {
//             setError('Password should be at least 6 characters')
//             return;
//         }

//         if (isLogin) {
//             processLogin(email, password);
//         }
//         else {
//             createUser(email, password);
//         }

//     }

//     const processLogin = (email, password) => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 console.log(result.user);
//                 setError('');
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//     }

//     const createUser = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 console.log(result.user);
//                 setError('')
//             })
//             .catch(error => {
//                 setError(error.message)
//             })
//     }
//     // ------------Custom Email Password----------


//     // Log out
//     const logout = () => {
//         signOut(auth)
//             .then(() => {
//                 setUser({})
//             }).finally(() => setIsLoadding(false));
//     }

//     // reserved all data of user
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user)
//             }
//             else {
//                 setUser({})
//             }
//             setIsLoadding(false)
//         })
//     }, [])

//     return { signInUsingGoogle, user, error, logout, isLoadding, handleRegistration, handleEmailChange, handlePasswordChange, toggle, isLogin }
// };

// export default useFirebase;
