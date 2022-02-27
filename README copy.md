# NextJS Solidity App

## What is Hardhat?
Hardhat compile contracts, generates typescript interfaces, creates React context and instantiates your contract instances and factories with frontend provider.

<br>

### Hardhat Terminal (Backend Server)
**Step 1a**: Open a terminal in the root directory (where the hardhat.config.ts is located).

**Step 2a**: Install the project dependencies with `npm install`.

**Step 3a**: Start the hard hat server. `npx hardhat node --watch`.

<br>

### NextJS/React Terminal (Frontend Server)
**Step 1b**: Open a second terminal in the frontend-next directory, `cd frontend-next`.

**Step 2b**: Install the project dependencies with `npm install`.

**Step 3b**: Configure MetaMask for use with Hardhat (below)

**Step 3b**: Start the front-end applicaton with `npm run dev`.

<br>

### Configuring MetaMask for use with Hardhat (Browser)

**Step 1c**: Click your profile icon in the top right corner of Chrome

**Step 2c**: Click "Add"

**Step 3c**: Give the profile a name and click "Add"

**Step 4c**: Install MetaMask for Chrome [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)

**Step 5c**: Import the default mnemonic used by hardhat `test test test test test test test test test test test junk`

**Step 6c**: Ensure Metamask RPC is set to http://localhost:8545 and chainID **1337**
