
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAB_yrqk4KstwC6OpZLJK7F1ns8qoZanOY",
  authDomain: "blogging-app-react-2bb09.firebaseapp.com",
  projectId: "blogging-app-react-2bb09",
  storageBucket: "blogging-app-react-2bb09.appspot.com",
  messagingSenderId: "838664644141",
  appId: "1:838664644141:web:ae44ee891d5f7c7b48faa4",
  measurementId: "G-55143NKCS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app