import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function PositionedSnackbar() {
	const [state, setState] = React.useState({
		open: false,
		vertical: "top",
		horizontal: "center"
	});
	const { vertical, horizontal, open } = state;

	const handleClick = () => () => {
		setState({
			open: true,
			vertical: "top",
			horizontal: "right"
		});
	};

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	return (
		<div>
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				message="I love snacks"
				key={vertical + horizontal}
			/>
		</div>
	);
}
