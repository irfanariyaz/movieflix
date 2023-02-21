import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZ8lnWTO9A4MpgK_4DrLbO4IRXwSjXdKg",
    authDomain: "movieflix-553a8.firebaseapp.com",
    projectId: "movieflix-553a8",
    storageBucket: "movieflix-553a8.appspot.com",
    messagingSenderId: "112879695944",
    appId: "1:112879695944:web:82c5b6c392faa35524007d"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth= firebase.auth()

  export{auth}
  export default db;