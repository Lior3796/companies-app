import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: "companies-app.firebaseapp.com",
	projectId: "companies-app",
	storageBucket: "companies-app.appspot.com",
	messagingSenderId: "592143629880",
	appId: process.env.API_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
