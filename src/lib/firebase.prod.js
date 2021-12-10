import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { seedDatabase } from '../seed';
const config = {
    apiKey: "AIzaSyC_WAE3NtUkCJrN2-lBNUnBy6rh3SbHNZM",
    authDomain: "netflix-app-2a36f.firebaseapp.com",
    projectId: "netflix-app-2a36f",
    storageBucket: "netflix-app-2a36f.appspot.com",
    messagingSenderId: "1039094846094",
    appId: "1:1039094846094:web:0e4a85a31066128802efdf"
}

const firebase = Firebase.initializeApp(config);

export { firebase };