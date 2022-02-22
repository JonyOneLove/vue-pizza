import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCuFQirKzUufarbKZgpyrTA-y8TCydoskM',

  authDomain: 'vue-pizza-773ad.firebaseapp.com',

  projectId: 'vue-pizza-773ad',

  storageBucket: 'vue-pizza-773ad.appspot.com',

  messagingSenderId: '369062625573',

  appId: '1:369062625573:web:69f54a315fa0f59b4adacc',
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)

export { firestore }

// apiKey: process.env.VUE_APP_API_KEY,
// authDomain: process.env.VUE_APP_AUTH_DOMAIN,
// projectId: process.env.VUE_APP_PROJECT_ID,
// storageBucket: process.env.VUE_APP_STORAGE,
// messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER,
// appId: process.env.VUE_APP_APP_ID,
