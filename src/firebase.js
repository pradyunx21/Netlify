import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyAm0U4dfgWOhAJtpNV0UZj2bkcy-nIF3SY",
  authDomain: "taskp-efc31.firebaseapp.com",
  projectId: "taskp-efc31",
  storageBucket: "taskp-efc31.firebasestorage.app",
  messagingSenderId: "556497533092",
  appId: "1:556497533092:web:fb021d935cee6e65650e31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
