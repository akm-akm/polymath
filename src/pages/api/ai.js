import axios from "axios";

const ai = async (req, res) => {
	try {
		const { data } = req.body;

		const options = {
			method: "POST",
			url: "https://ai-image-generator3.p.rapidapi.com/generate",
			headers: {
				"content-type": "application/json",
				"X-RapidAPI-Key": process.env.RapidAPI,
				"X-RapidAPI-Host": "ai-image-generator3.p.rapidapi.com"
			},
			data: {
				prompt: data,
				page: 1
			}
		};
		const response = await axios.request(options);
		//  res.status(200).json({ images: itemData });
		res.status(200).json({ images: response.data.results.images });
	} catch (error) {
		console.log(error);
		res.status(501);
	}
};
export default ai;
