import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8h9sT_68Rqys8RdSrEOwwLK7N2Yit0QM",
  authDomain: "linkdin-clone-ffa7b.firebaseapp.com",
  projectId: "linkdin-clone-ffa7b",
  storageBucket: "linkdin-clone-ffa7b.appspot.com",
  messagingSenderId: "202516708336",
  appId: "1:202516708336:web:24979f9f971da83f45bb35",
  measurementId: "G-7KX50L7PB1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export{auth,provider,storage};
export default db;
