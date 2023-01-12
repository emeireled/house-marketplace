import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD8NSMRTlm4cpMizQQGrIyBn4BIhdDz24g',
  authDomain: 'house-marketplace-app-595e3.firebaseapp.com',
  projectId: 'house-marketplace-app-595e3',
  storageBucket: 'house-marketplace-app-595e3.appspot.com',
  messagingSenderId: '316187868809',
  appId: '1:316187868809:web:92c866dcf12b2d15169058',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
