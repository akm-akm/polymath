import { useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { auth, db } from "../src/utils/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Saved({ saved, setSaved }) {
	const [user, setUser] = useAuthState(auth);
	useEffect(() => {
		(async () => {
			try {
				const collRef = collection(db, "save");
				const snapshots = await getDocs(collRef);
				const docs = snapshots.docs.map((doc) => doc.data());
				console.log(docs);
				docs.filter((x) => x.user != user.email);
				setSaved(docs);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [user]);

	if (!saved) {
		return <p>Loading...</p>;
	}
	if (!user) {
		return <p>Login to see saved Images</p>;
	}
	return (
		<>
			{saved.map((item) => (
				<>
					<ImageList
						key={item.term}
						sx={{ width: 80, height: 70 }}
						cols={4}
						rowHeight={30}
					>
					<p key={item.term}>{item.term}</p>
						{item.links.map((x) => (
							<ImageListItem key={x}>
								<img
									src={`${x}?w=164&h=164&fit=crop&auto=format`}
									srcSet={`${x}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
									loading="lazy"
									alt="img"
								/>
							</ImageListItem>
						))}
					</ImageList>
				</>
			))}
		</>
	);
}
