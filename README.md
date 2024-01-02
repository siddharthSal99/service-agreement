# Getting Started with my service agreement renderer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Relevant files:
* `input.json` contains the html document structure to be rendered
* `App.js` reads the input.json structure and passes it to the `DocumentRenderer` to be rendered
* `DocumentRenderer.js` has the rendering logic 