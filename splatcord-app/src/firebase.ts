import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkCKPE1ngJXGD_MOG9CPtuMQJe-Ma07aU",
  authDomain: "splatcord.firebaseapp.com",
  databaseURL: "https://splatcord.firebaseio.com",
  projectId: "splatcord",
  storageBucket: "splatcord.appspot.com",
  messagingSenderId: "441781195695",
  appId: "1:441781195695:web:0cac6025a3946ee712955a",
  measurementId: "G-EHTRFX9PM7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;