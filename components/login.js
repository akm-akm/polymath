import { auth } from "../src/utils/firebase";
import Fab from "@mui/material/Fab";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
function Login() {
	const [user, setUser] = useAuthState(auth);
	const googleAuth = new GoogleAuthProvider();
	const login = async () => {
		const result = await signInWithPopup(auth, googleAuth);
	};

	const fabStyle = {
		position: "fixed",
		bottom: 16,
		right: 16
	};

	if (!user)
		return (
			<Fab sx={fabStyle} onClick={login} color="primary" variant="extended">
				<LoginIcon sx={{ mr: 1 }} />
				Login
			</Fab>
		);
	else
		return (
			<Fab
				sx={fabStyle}
				onClick={() => auth.signOut()}
				color="primary"
				variant="extended"
			>
				<LogoutIcon sx={{ mr: 1 }} />
				Log out
			</Fab>
		);
}

export default Login;
