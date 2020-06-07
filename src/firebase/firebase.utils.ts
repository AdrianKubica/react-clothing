import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDLb27J8XH1xcTUKEV6DQDz0wQl4TkKRRE",
  authDomain: "react-clothing-7742f.firebaseapp.com",
  databaseURL: "https://react-clothing-7742f.firebaseio.com",
  projectId: "react-clothing-7742f",
  storageBucket: "react-clothing-7742f.appspot.com",
  messagingSenderId: "950091501457",
  appId: "1:950091501457:web:8097c85f9adc21110bd430",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firesotre = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
