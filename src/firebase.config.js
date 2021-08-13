import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUtzeHBMPoRz6lbMmsRU6PxpHUZ1ALwOc",
  authDomain: "company-directory-system-baf5d.firebaseapp.com",
  projectId: "company-directory-system-baf5d",
  storageBucket: "company-directory-system-baf5d.appspot.com",
  messagingSenderId: "859856939776",
  appId: "1:859856939776:web:ffffe054facfd7eacf61e5",
  measurementId: "G-VW0XCXC8G5",
};

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const addUser = (userData) => {
  const firestore = firebase.firestore();
  firestore.collection("users").add(userData);
};

export const getUsers = async () => {
  const firestore = firebase.firestore();

  const users = await firestore.collection("users").get();

  const usersToArray = [];
  users.docs.forEach((doc) => usersToArray.push(doc.data()));
  return usersToArray;
};
