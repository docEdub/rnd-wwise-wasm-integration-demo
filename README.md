# Wwise WASM Integration Demo

This project sets up a Webpack dev server for the Wwise WASM IntegrationDemo project with the necessary cross-origin policies configured to get `SharedArrayBuffer` working in browsers, which is required for Wwise WASM projects.

## Usage

- Clone this repo.
- Build the Wwise WASM IntegrationDemo project using [these instructions](https://github.com/docEdub/notes/blob/main/tasks/221001-audio/230310-wwise-wasm-integration-demo-build-instructions.md), and put the output files listed here in this project's root folder.
    - IntegrationDemo.data
    - IntegrationDemo.html
    - IntegrationDemo.js
    - IntegrationDemo.wasm
    - WwiseAudioWorklet.processor.js
- Run `npm install && npm start`.
- Open `http://localhost/IntegrationDemo.html` in a browser.
