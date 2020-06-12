import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2peVaD7Xmm5UPdEC4a3Rt4FUyVN6G3tA",
  authDomain: "the-goal-diggers-project.firebaseapp.com",
  databaseURL: "https://the-goal-diggers-project.firebaseio.com",
  projectId: "the-goal-diggers-project",
  storageBucket: "the-goal-diggers-project.appspot.com",
  messagingSenderId: "640497988244",
  appId: "1:640497988244:web:d8b78592e1607d8381ba81",
  measurementId: "G-N0R31TWE7Z"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire