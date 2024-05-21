// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC37ZRN90yt_jVAplJyulnR660g5D-yPtQ",
    authDomain: "imagenes-react-9d27e.firebaseapp.com",
    projectId: "imagenes-react-9d27e",
    storageBucket: "imagenes-react-9d27e.appspot.com",
    messagingSenderId: "676403442721",
    appId: "1:676403442721:web:a48246954114f50c001f60",
    measurementId: "G-CJLC93XZWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(name,file){

    const storageRef =  ref(storage,name)
     await uploadBytes(storageRef,file)
    const url = await getDownloadURL(storageRef)
    
    return url

}