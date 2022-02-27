# NextJS Solidity App

## What is Hardhat?
Hardhat is an Ethereum development environment for professionals. It facilitates performing frequent tasks, such as running tests, automatically checking code for mistakes or interacting with a smart contract.
<br><br>
Hardhat compile contracts, generates typescript interfaces, creates React context and instantiates your contract instances and factories with frontend provider.

### Hardhat Terminal (Backend Server)
* Open a terminal in the root directory (where the hardhat.config.ts is located).
* Install the project dependencies with `npm install`.
* Start the hard hat server. `npx hardhat node --watch`.

### NextJS/React Terminal (Frontend Server)
* Open a second terminal in the frontend-next directory, `cd frontend-next`.
* Install the project dependencies with `npm install`.
* Configure MetaMask for use with Hardhat (below)
* Start the front-end applicaton with `npm run dev`.

### Configuring MetaMask for use with Hardhat (Browser)
* Click your profile icon in the top right corner of Chrome
* Click "Add"
* Give the profile a name and click "Add"
* Install MetaMask for Chrome [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)
* Import the default mnemonic used by hardhat `test test test test test test test test test test test junk`
* Ensure Metamask RPC is set to http://localhost:8545 and chainID **1337**


### Development
* Install the `solidity` vsCode extension, which should add highlighting to .sol files


### Troubleshooting
```
eth_sendRawTransaction
Nonce too high. Expected nonce to be 1 but got 4. Note that transactions can't be queued when automining.
```
* If you get this message during development, then in MetaMask click your avatar circle then `Settings` then `Advanced` and click `Reset Account` (ensure your on your test account).
