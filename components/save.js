import { auth, db } from "../src/utils/firebase";
import "dotenv";
import Fab from "@mui/material/Fab";
import SaveIcon from "@mui/icons-material/Save";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function Save({ term, links, saved, setSaved }) {
	const [user, setUser] = useAuthState(auth);
	const googleAuth = new GoogleAuthProvider();
	const login = async () => {
		const result = await signInWithPopup(auth, googleAuth);
	};

	const fabStyle = {
		position: "fixed",
		bottom: 70,
		right: 16
	};

	const handleSubmit = async () => {
		try {
			if (!user) {
				login();
			}
			const data = {
				term,
				user: user.email,
				links
			};
			const collRef = collection(db, "save");
			console.log(data);
			const d = await addDoc(collRef, data);
			console.log(d);
			setSaved([data, ...saved]);
			console.log(saved);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<Fab
				sx={fabStyle}
				onClick={handleSubmit}
				color="primary"
				variant="extended"
			>
				<SaveIcon sx={{ mr: 1 }} />
				Save
			</Fab>
		</>
	);
}

export default Save;
