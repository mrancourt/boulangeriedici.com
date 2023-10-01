# Boulangerie d'ici

## Firebase
To deploy functions
```javascript
 firebase deploy --only functions
```
To set functions configs
```javascript
firebase functions:config:set gmail.email="email@domain.com" gmail.password="password"
```

## Sending email
For gmail accounts, you will need to turn on 2fa, then request app password.

## Images Post Processing

### Creating a Batch Filter in Photoshop

#### 1. Create an Action

1. Open any image in Photoshop to use as a sample.
2. Navigate to `Window > Actions` to open the **Actions** panel.
3. Click on the **Create New Action** icon (it looks like a page).
4. Name the action, e.g., "Custom Level and Saturation".
5. Click **Record**.

#### 2. Apply Levels

1. Use the shortcut `Command (⌘) + L` to open the Levels adjustment.
2. Adjust the following:
    - **Shadow** (left slider under Input Levels): `17`
    - **Midtones** (middle input box): `1.15`
    - **Light** (right slider under Input Levels): `210`
3. Click **OK**.

#### 3. Apply Hue/Saturation

1. Use the shortcut `Command (⌘) + U` to open Hue/Saturation.
2. Adjust the **Saturation** to `-20`.
3. Click **OK**.

#### 4. Stop Recording

1. Click the **Stop Recording** button in the Actions panel (it looks like a square).

#### 5. Batch Process

1. Navigate to `File > Automate > Batch`.
2. In the **Play** section, select your set (if you created one) and the action "Custom Level and Saturation".
3. For **Source**, choose your folder of images to process.
4. For **Destination**, choose your save location.
5. Adjust other settings as desired, like file naming.
6. Click **OK**.


### Image Resizing 
```javascript
 mkdir -p resized && sips -Z 1920 *.jpg --out resized/
```

### Image Resizing
Tinyfiy with [tinypng](https://tinypng.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
