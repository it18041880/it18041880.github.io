import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBmRRkWLt-eDbYFGDNg86qyFfbD3RPniU",
  authDomain: "resume-38159.firebaseapp.com",
  projectId: "resume-38159",
  storageBucket: "resume-38159.appspot.com",
  messagingSenderId: "237696697774",
  appId: "1:237696697774:web:ba9b5eadbcdfc7a1f5b43f",
  measurementId: "G-P69MK4FD41"
  });

  var db = firebaseApp.firestore();


  export { db };