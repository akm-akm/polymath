import { auth, db } from "../src/utils/firebase";
import Fab from "@mui/material/Fab";
import SaveIcon from "@mui/icons-material/Save";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

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
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
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
			handleClick();
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
				<Snackbar
					open={open}
					autoHideDuration={2000}
					onClose={handleClose}
					message="Images Saved"
					severity="success"
					color="white"
					variant="outlined"
				/>
				<SaveIcon sx={{ mr: 1 }} />
				Save
			</Fab>
		</>
	);
}

export default Save;
