# Mercedes-Benz-Assignment

Pre-requisites
- Meta mask browser extension installed and has a test account with ether
- node v18.12.1
- npm 8.19.2

**You can click on Change Date button to change to a valid date** <br /> 
**You can click on Mint button to mint the NFT**

1. Clone this repo to your local drive <br />
$ git clone https://github.com/kaiweifan11/Mercedes-Benz-Assignment.git

2. navigate to Mercedes-Benz-Assignment <br />
$ cd Mercedes-Benz-Assignment

3. Start Ganache cli or open Ganache UI and point to port 8545 <br />
$ ganache

4. In another command prompt, run command <br />
$ truffle migrate 

5. copy the contract address into client/src/config.js on line 8

6. navigate to client folder <br />
$ cd client

7. install dependencies <br />
$ npm install

8. run command <br />
$ npm start

9. You might have to log in to your meta mask account when prompted

<br />

This assessment is about developing an NFT portal in order to assess the technical skills of the candidate.
The Assessment consists of 2 parts :
1. Smart contracts :<br />
a. Develop and Deploy NFT smart contracts<br />
b. The smart contracts should be able to mint NFT<br />
i. Mint only valid certain duration (example between 7 Jan to 14 Jan 2023)<br />
ii. Mint only once for each wallet<br />
iii. Only able to mint 5 NFT<br />
iv. The NFT should have metadata (name, description, image)<br />
c. Script to deploy the smart contract<br />
2. WebApp :<br />
a. Bootstrap can be used on the React app<br />
b. Any preferred React framework can be used<br />
c. Web3 integration with web3.js or ether.js<br />
d. Interact with 1. Smart contract by Claim (mint) NFT to the connected wallet<br />
e. The App should display the NFT image from NFT metadata<br />
f. The necessary error handlings to be developed<br />
<br />
Please zip the solution and provide the publicly accessible GitHub link of the solution for whatever development work done.<br />
The solution should include the instructions on how to start the application and deploy the smart contract.
Any other references, documentation can be provided along with codebase.
