import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDl5-eIgNo4d8b80qVsNxyzP9j7Bj0s2tQ",
    authDomain: "first-try-1fd2d.firebaseapp.com",
    projectId: "first-try-1fd2d",
    storageBucket: "first-try-1fd2d.appspot.com",
    messagingSenderId: "273489453382",
    appId: "1:273489453382:web:c774cfe627c77ca946c547"
}
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
