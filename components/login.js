import { auth } from "../src/utils/firebase";
import "dotenv";
import Fab from "@mui/material/Fab";
import SaveIcon from "@mui/icons-material/Save";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
	const [user, setUser] = useAuthState(auth);
	const googleAuth = new GoogleAuthProvider();
	const login = async () => {
		const result = await signInWithPopup(auth, googleAuth);
	};

	if (!user)
		return (
			<Fab onClick={login} color="primary" variant="extended">
				<SaveIcon sx={{ mr: 1 }} />
				Login
			</Fab>
		);
	else
		return (
			<Fab onClick={() => auth.signOut()} color="primary" variant="extended">
				<SaveIcon sx={{ mr: 1 }} />
				Log out
			</Fab>
		);
}

export default Login;