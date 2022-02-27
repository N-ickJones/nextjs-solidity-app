# NextJS Solidity App

## What is Hardhat?
* Hardhat is an Ethereum development environment for professionals. It facilitates performing frequent tasks, such as running tests, automatically checking code for mistakes or interacting with a smart contract.\
* Hardhat compile contracts, generates typescript interfaces, creates React context and instantiates your contract instances and factories with frontend provider.

<br>

### Hardhat Terminal (Backend Server)
* Open a terminal in the root directory (where the hardhat.config.ts is located).
* Install the project dependencies with `npm install`.
* Start the hard hat server. `npx hardhat node --watch`.

<br>

### NextJS/React Terminal (Frontend Server)
* Open a second terminal in the frontend-next directory, `cd frontend-next`.
* Install the project dependencies with `npm install`.
* Configure MetaMask for use with Hardhat (below)
* Start the front-end applicaton with `npm run dev`.

<br>

### Configuring MetaMask for use with Hardhat (Browser)
* Click your profile icon in the top right corner of Chrome
* Click "Add"
* Give the profile a name and click "Add"
* Install MetaMask for Chrome [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
* Import the default mnemonic used by hardhat `test test test test test test test test test test test junk`
* Ensure Metamask RPC is set to http://localhost:8545 and chainID **1337**

<br>