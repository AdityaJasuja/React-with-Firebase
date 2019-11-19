import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBjXMECzw8weEpaQQIOZb1wIC8pcPkfCkM",
    authDomain: "react-with-firebase-57e93.firebaseapp.com",
    databaseURL: "https://react-with-firebase-57e93.firebaseio.com",
    projectId: "react-with-firebase-57e93",
    storageBucket: "react-with-firebase-57e93.appspot.com",
    messagingSenderId: "188055967041",
    appId: "1:188055967041:web:f26311c03b6bac4ddbbdc0",
    measurementId: "G-SLZ528D7D0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots:true });

  export default firebase;