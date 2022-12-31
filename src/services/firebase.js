import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtZlQWuMaRCqzcvFi_rIGVdmQqBZpT2jg",
  authDomain: "react-ef9b1.firebaseapp.com",
  databaseURL: "https://react-ef9b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-ef9b1",
  storageBucket: "react-ef9b1.appspot.com",
  messagingSenderId: "278968672676",
  appId: "1:278968672676:web:f6ab18abc8fec24e64e131"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)

