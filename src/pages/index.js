import { useState } from "react";
import Imageslist from "../../components/Imageslist";
import axios from "axios";
import Save from "../../components/save";
import Login from "../../components/login";
import Saved from "../../components/Savedlist";
import styles from "../styles/Home.module.css";

function Index() {
	const [data, setData] = useState([]);
	const [saved, setSaved] = useState([]);
	const [value, setValue] = useState({
		data: ""
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!value) {
			return;
		}
		const response = await axios({
			method: "post",
			url: "/api/ai",
			data: JSON.stringify(value),
			headers: { "Content-Type": "application/json" },
			withCredentials: false
		});
		setData(response.data.images);
	};

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className={styles.div0}>
			<Login />
			<input
				type="text"
				name="data"
				id="search"
				value={value.data}
				onChange={handleChange}
				placeholder="Search here"
			/>
			<button onClick={handleSubmit}>Search</button>

			<div className={styles.div1}>
				{data.length != 0 ? (
					<>
						<Save
							term={value.data}
							saved={saved}
							setSaved={setSaved}
							links={data}
						/>
						<Imageslist data={data} />
					</>
				) : (
					""
				)}
			</div>
			<div className={styles.div1}>
				{<Saved saved={saved} setSaved={setSaved} />}
			</div>
		</div>
	);
}

export default Index;
