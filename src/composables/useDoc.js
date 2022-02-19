import { ref } from 'vue'
import { firestore } from '@/firebase/config'
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
} from 'firebase/firestore'

const useDoc = () => {
  const getCollection = async (collectionName) => {
    const documents = ref(null)
    const error = ref(null)

    try {
      const myCollection = collection(firestore, collectionName)
      const response = await getDocs(myCollection)

      documents.value = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    } catch (err) {
      error.value = err.message
    }

    return { documents, error }
  }

  const getFilteredCollection = async (collectionName, category) => {
    const documents = ref(null)
    const error = ref(null)

    try {
      const myCollection = collection(firestore, collectionName)
      const dataColl = query(
        myCollection,
        where('category', '==', parseInt(category))
      )
      const response = await getDocs(dataColl)

      documents.value = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    } catch (err) {
      error.value = 'Данные не получины ошибка'
    }

    return { documents, error }
  }

  const getDocument = async (collectionName, id) => {
    const documents = ref(null)
    const error = ref(null)

    try {
      const dataCol = doc(firestore, collectionName, id)
      const response = await getDoc(dataCol)

      documents.value = { ...response.data(), id: response.id }
    } catch (err) {
      error.value = err.message
    }

    return { documents, error }
  }

  return { getCollection, getFilteredCollection, getDocument }
}

export default useDoc
