import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAPrVQHdcWZOH6jE9dlfcZDxLflFcBroQ8',
  authDomain: 'eqrothermal-39dae.firebaseapp.com',
  projectId: 'eqrothermal-39dae',
  storageBucket: 'eqrothermal-39dae.appspot.com',
  messagingSenderId: '679856695052',
  appId: '1:679856695052:web:9c4283adf1d6eeb4d38b29',
}

export const firebaseApp = initializeApp(firebaseConfig)

export const firestoreDb = getFirestore(firebaseApp)
