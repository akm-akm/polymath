import axios from "axios";

const itemData = [
	"https://image.lexica.art/full_jpg/0b90de5d-d818-4c15-9303-6c27c2ab833f",
	"https://image.lexica.art/full_jpg/0fe5de23-c995-4f00-a9b7-dd795716ae63",
	"https://image.lexica.art/full_jpg/13173f78-a879-499b-9f57-5bc25d8464e6",
	"https://image.lexica.art/full_jpg/1465bfb6-3dfb-4898-a92c-1e5a72a108c8",
	"https://image.lexica.art/full_jpg/181b6c85-03c5-4879-b325-150b5ee32720",
	"https://image.lexica.art/full_jpg/193818d7-e6e1-4192-932e-abf4974c32e4",
	"https://image.lexica.art/full_jpg/249e970d-9aa5-48df-a6f3-d08325ba726f",
	"https://image.lexica.art/full_jpg/2b2492ff-9b5d-4c2d-9b2c-47fd7816497c",
	"https://image.lexica.art/full_jpg/3c0930d1-3d1b-4ffc-96d9-15d096fe4a58",
	"https://image.lexica.art/full_jpg/4190444d-1a99-4149-bde8-54fc21b63f2a",
	"https://image.lexica.art/full_jpg/452fe1b0-8475-43b6-aafb-46401fa6b360",
	"https://image.lexica.art/full_jpg/496a35a2-27c0-4080-8859-d13ac0f3c4bb",
	"https://image.lexica.art/full_jpg/4b6f0f1f-6414-459e-871f-b4f861026788",
	"https://image.lexica.art/full_jpg/4e2a7f89-a625-40f5-8992-f0f750992560",
	"https://image.lexica.art/full_jpg/4eb3cbe0-1229-40d0-9d84-3b2ea75db2b8",
	"https://image.lexica.art/full_jpg/4fa0b8f8-c102-4282-a566-c128f0a52933",
	"https://image.lexica.art/full_jpg/56fb1734-b57d-49d8-8c84-7d45ef114d9d",
	"https://image.lexica.art/full_jpg/5c34094c-b387-4884-9de1-bea7259d5621",
	"https://image.lexica.art/full_jpg/5dc86c6a-3851-4af6-9a4b-85962be1489a",
	"https://image.lexica.art/full_jpg/7555df8d-b1bb-46ab-9920-ff08dfeb46b3",
	"https://image.lexica.art/full_jpg/79d023ca-6203-4365-9bf0-fef295710d3e",
	"https://image.lexica.art/full_jpg/95991b54-23de-4a4c-9365-b190c4e8834c",
	"https://image.lexica.art/full_jpg/9bd52a5b-dcfd-4cd8-9a13-b3eab966e634",
	"https://image.lexica.art/full_jpg/a619a315-0423-4415-8a39-4cb5ed973775",
	"https://image.lexica.art/full_jpg/aff09065-8bb4-4e66-a6c7-9e5222fcb23c",
	"https://image.lexica.art/full_jpg/c13544d6-919f-42b7-bb2b-ace4b3480f31",
	"https://image.lexica.art/full_jpg/c2997803-c943-4681-9662-b6823ad6390f",
	"https://image.lexica.art/full_jpg/c377c669-feb5-4966-aefb-09448401a5f1",
	"https://image.lexica.art/full_jpg/c6da15d9-8dd0-4277-a04f-7fbd4c027302",
	"https://image.lexica.art/full_jpg/cbf906df-e950-4e36-a13a-eef35a17fac7",
	"https://image.lexica.art/full_jpg/cff69400-d7b1-481a-9510-35b2b1ae838b",
	"https://image.lexica.art/full_jpg/e299af2e-9337-4768-8272-d6af604cdcce",
	"https://image.lexica.art/full_jpg/e4ac0ce7-0409-44b8-9a4f-59f256703a39",
	"https://image.lexica.art/full_jpg/e72a59e8-fff1-4722-b7a8-084f7eb4ad90",
	"https://image.lexica.art/full_jpg/eb7e9e62-bc61-42d0-90ad-683479c7392a",
	"https://image.lexica.art/full_jpg/ef1bce3d-5f7b-4f4c-8d42-59837fc1fd9c",
	"https://image.lexica.art/full_jpg/f348cffc-5e59-4132-904e-f394259469aa",
	"https://image.lexica.art/full_jpg/ff1e7ce5-e49c-4066-8f7e-c116581ea09b"
];

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
