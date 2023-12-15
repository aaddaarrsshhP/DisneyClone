import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDem0XB4tMSIxzWOMP08AQ02W63uTFQ3V4",
    authDomain: "disney-clone-db482.firebaseapp.com",
    projectId: "disney-clone-db482",
    storageBucket: "disney-clone-db482.appspot.com",
    messagingSenderId: "278467477416",
    appId: "1:278467477416:web:08bfbd7704643ae793679d",
    measurementId: "G-KGQQM9XJS0"
  };
  
  const fire=initializeApp(firebaseConfig);
  const db=getFirestore(fire);
  const aut=getAuth(fire);
  const provider=new GoogleAuthProvider();
  const storage=getStorage(fire)

export {aut,provider,storage,firebaseConfig};
export default db;
  