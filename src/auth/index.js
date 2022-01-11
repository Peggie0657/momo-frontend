import { API } from "../config";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCQGDGEqO-l0rnT35viJAezNuXIDCl60sU",
    authDomain: "momologin1227.firebaseapp.com",
    projectId: "momologin1227",
    storageBucket: "momologin1227.appspot.com",
    messagingSenderId: "446295193951",
    appId: "1:446295193951:web:3cdc830cb982d3fd665eea",
    measurementId: "G-W5KGD59XHP"
};

export const signup = (user) => {
    // console.log(name, email, password)
    return fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const signin = (user) => {
    // console.log(name, email, password)
    return fetch(`${API}/auth/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const authenticate = (data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        // next();
    }
}

export const signout = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        // next();
        // return fetch(`${API}/signout`, {
        //     method: 'GET',

        // })
        //     .then(response => {
        //         console.log('signout', response)
        //     })
        //     .catch(err => console.log(err))
    }
}

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    } else {
        return false;
    }
}

export const googlelogin = () => {
    initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    const auth = getAuth();
    const providerGoogle = new GoogleAuthProvider();
    signInWithPopup(auth, providerGoogle)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}