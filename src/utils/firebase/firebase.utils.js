// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoOto56o3Z9GG2ozatQgsx7l_W6CQpD5k",
  authDomain: "crwn-clothing-db-74246.firebaseapp.com",
  projectId: "crwn-clothing-db-74246",
  storageBucket: "crwn-clothing-db-74246.appspot.com",
  messagingSenderId: "330396641095",
  appId: "1:330396641095:web:c4c51076da7498a2fc4e62"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider =new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});
export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

