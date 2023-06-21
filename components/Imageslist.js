import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
export default function StandardImageList({ data }) {
	return (
		<ImageList variant="masonry" cols={4} gap={8}>
			{data.map((item) => (
				<ImageListItem key={item}>
					<img
						src={`${item}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						loading="lazy"
						alt="img"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}
