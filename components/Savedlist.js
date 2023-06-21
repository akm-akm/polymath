import { useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { auth, db } from "../src/utils/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Divider from "@mui/material/Divider";

export default function Saved({ saved, setSaved }) {
	const [user, setUser] = useAuthState(auth);
	useEffect(() => {
		(async () => {
			try {
				const collRef = collection(db, "save");
				const snapshots = await getDocs(collRef);
				const docs = snapshots.docs.map((doc) => {
					const data = doc.data();
					data.id = doc.id;
					return data;
				});
				docs.filter((x) => x.user != user.email);
				console.log(docs);
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
					<h3 key={item.id}>{item.term}</h3>
					<ImageList
						key={item.id+'21'}
						sx={{ width: "100%", height: 404 }}
						cols={20}
						rowHeight={200}
					>
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
					<Divider />
				</>
			))}
		</>
	);
}
