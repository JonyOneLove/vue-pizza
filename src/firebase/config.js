import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAd4ICa2YBCU227Z4sM4SA2ax2HTh9U7II',

  authDomain: 'vue-pizza-10c02.firebaseapp.com',

  projectId: 'vue-pizza-10c02',

  storageBucket: 'vue-pizza-10c02.appspot.com',

  messagingSenderId: '167143395073',

  appId: '1:167143395073:web:e4113d01d6cd8cf3a5d500',
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)

export { firestore }
