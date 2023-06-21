import { useState } from "react";
import Imageslist from "../../components/Imageslist";
import axios from "axios";
import Save from "../../components/save";
import Login from "../../components/login";
import Saved from "../../components/Savedlist";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

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
		<div>
			<Login />

			<Box
				sx={{
					width: 400,
					maxWidth: "100%",
					position: "fixed",
					top: "80%",
					left: "50%",
					padding: "10px",
					marginLeft: -26,
					zIndex: 2,
					backgroundColor: "white"
				}}
			>
				<TextField
					fullWidth
					label="Type here"
					size="small"
					name="data"
					onChange={handleChange}
					margin="normal"
				/>
				<Button
					size="large"
					fullWidth
					onClick={handleSubmit}
					variant="contained"
				>
					Search
				</Button>
			</Box>

			<div>
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
			<Divider />
			<h1>Saved Images</h1>
			<Divider />

			<div>{<Saved saved={saved} setSaved={setSaved} />}</div>
		</div>
	);
}

export default Index;
