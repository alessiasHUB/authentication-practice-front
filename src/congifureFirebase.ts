// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration.
//
// Usually, you need to fastidiously guard API keys (for example, by
// setting the keys as environment variables);
// however, API keys for Firebase services are ok to include in code or checked-in config files.
const firebaseConfig = {
  apiKey: "AIzaSyAWZUsaEjRsRzFIQhrgd2HW38UhnQxMqts",
  authDomain: "authentication-practice-4b75b.firebaseapp.com",
  projectId: "authentication-practice-4b75b",
  storageBucket: "authentication-practice-4b75b.appspot.com",
  messagingSenderId: "246261214385",
  appId: "1:246261214385:web:4673bd6fe7055e5514c690",
  measurementId: "G-0WZH3ZKFRP",
};

// Initialize Firebase as a whole
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Other auth providers include github, twitter, apple.
//These must be enabled in your firebase console.
export const googleAuthProvider = new GoogleAuthProvider();
