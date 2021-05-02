This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deploy
Install Firebase tools
```bash
npm install -g firebase-tools
```
Login to Firebase
```bash
firebase login
```
Use project 
```bash
firebase use boulangerie-d-ici
```
Build latest version
```bash
npm run build
```
Deploy test version
```bash
firebase hosting:channel:deploy preview_name


=== Deploying to 'boulangerie-d-ici'...

i  deploying hosting
i  hosting[boulangerie-d-ici]: beginning deploy...
i  hosting[boulangerie-d-ici]: found 26 files in build
✔  hosting[boulangerie-d-ici]: file upload complete
i  hosting[boulangerie-d-ici]: finalizing version...
✔  hosting[boulangerie-d-ici]: version finalized
i  hosting[boulangerie-d-ici]: releasing new version...
✔  hosting[boulangerie-d-ici]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/boulangerie-d-ici/overview
Hosting URL: https://boulangerie-d-ici.web.app

✔  hosting:channel: Channel URL (boulangerie-d-ici): https://boulangerie-d-ici--preview-name-02v7vgdl.web.app [expires 2021-05-08 20:54:05]
```
Deploy to prod
```bash
firebase deploy --only hosting
```
