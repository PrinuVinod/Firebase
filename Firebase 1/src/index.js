import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc,
  query, where, orderBy, serverTimestamp, updateDoc, getDoc, snapshotEqual, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDGDGpzGu-Z-D80fcNGK3GGjRxjUNIF6NA",
  authDomain: "cafe-thng.firebaseapp.com",
  projectId: "cafe-thng",
  storageBucket: "cafe-thng.appspot.com",
  messagingSenderId: "703786198290",
  appId: "1:703786198290:web:f521263fdd349218ccffcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'cafes')

// queries
const q = query(colRef)

//get collection data
getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })

// //realtime collection data
// onSnapshot(q, (snapshot) => {
//   let cafes = []
//   snapshot.docs.forEach(doc => {
//     cafes.push({ ...doc.data(), id: doc.id })
//   })
//   console.log(cafes)
// })

// // adding docs
// const addBookForm = document.querySelector('.add')
// addBookForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   addDoc(colRef, {
//     title: addBookForm.title.value,
//     author: addBookForm.author.value,
//     createdAt: serverTimestamp()
//   })
//   .then(() => {
//     addBookForm.reset()
//   })
// })

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'cafes', deleteBookForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
    })
})

// // fetching a single document (& realtime)
// const docRef = doc(db, 'books', 'gGu4P9x0ZHK9SspA1d9j')

// onSnapshot(docRef, (doc) => {
//   console.log(doc.data(), doc.id)
// })

// updating a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let docRef = doc(db, 'books', updateForm.id.value)

  updateDoc(docRef, {
    title: 'updated title'
  })
  .then(() => {
    updateForm.reset()
  })
})