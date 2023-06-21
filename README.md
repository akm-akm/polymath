# Polymath AI  



First, fill the `.env.example` with the given environment variables, then rename it to `.env.local`

Then, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Working

- This website displays AI generated images using user input and by calling Rapid API.
- When a user visits the website, he is presented with a search bar where he can input a image description, after clicking the search button, an image grid is displayed with 30 to 40 images.
- The user also gets an option to save the images with a save button. When the user clicks the save button, a pop up is opened with the option to  sign in using his google account( if he is not logged in). It then saves the images and also displays the saved images in the right side.
- The user also gets an option to log in using a button if he just wants to see his previously saved images.
- The user can also sign out of the application.
- It uses firebase authentication and firestore database to store the images.
- To get the image, it calls Rapid API (https://rapidapi.com/sohailglt/api/ai-image-generator3/)

## Assumptions

- The user gets to search for images even though he is not authenticated, because not everyone likes to log in for everything.
- The user is automatically presented with the pop up if he is not logged in and he clicks on the save button.
- he also gets a dedicated log in button if he just wants to see his saved posts.
- The user can delete his own posts.
- Not much emphasis is given on the appearace of the website.
