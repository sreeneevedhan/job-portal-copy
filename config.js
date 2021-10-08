import firebase from 'firebase'
require("@firebase/firestore")


/* Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwTvs7rxKaGVKtT_dANHq3fpehOBheBkI",
  authDomain: "job-portal-27490.firebaseapp.com",
  projectId: "job-portal-27490",
  storageBucket: "job-portal-27490.appspot.com",
  messagingSenderId: "370794309267",
  appId: "1:370794309267:web:22fef414b75da1a8554f66"
};
*/
// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAwt8DzmSoSYNc2cTznoMXEurN0hwZMSJ4",
  authDomain: "complaint-forum-803f4.firebaseapp.com",
  projectId: "complaint-forum-803f4",
  storageBucket: "complaint-forum-803f4.appspot.com",
  messagingSenderId: "637506375132",
  appId: "1:637506375132:web:928b7401c57e7170b31319"
};


if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   