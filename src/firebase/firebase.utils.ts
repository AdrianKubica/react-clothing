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

export const createUserProfileDocument = async (userAuth: firebase.User, additionaData?: {}) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...additionaData })
    } catch (err) {
      console.log("Error creating user", err.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
