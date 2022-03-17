import { collection, getDocs, addDoc } from "@firebase/firestore";
import { db } from "./firebase-config";

// services

export const createApiClient = async (page: number): Promise<object | void> => {
	console.log("before data");
	const collectionRef = collection(db, "companies123");
	const data = await getDocs(collectionRef);
	console.log(data);
	const matches = data.docs
		.map((item) => {
			return { ...item.data() };
		})
		.splice((page - 1) * 4, 5);
	console.log(matches);

	return matches;
};

export const getAllMatchesForFilter = async (
	label: string
): Promise<object | void> => {
	const collectionRef = collection(db, "companies123");
	const data = await getDocs(collectionRef);
	const matches = data.docs
		.map((item) => {
			return { ...item.data() };
		})
		.filter((item) => item.labels.indexOf(label) !== -1);
	return matches;
};
