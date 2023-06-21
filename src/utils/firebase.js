import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyABhCXIVHb21i8Ptuw0O5I4fj218N1Wuto",
	authDomain: "polymath-506bc.firebaseapp.com",
	projectId: "polymath-506bc",
	storageBucket: "polymath-506bc.appspot.com",
	messagingSenderId: "914919471045",
	RapidAPI: "6c642c333fmsh320b4524e059072p1a9837jsn8d67e490576a",
	appId: "1:914919471045:web:d626d8c3f19b46fcf7bdac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore(app);
