// import { Network, Alchemy } from "alchemy-sdk";
// import { Contract, ethers } from 'ethers';
// import dotenv from 'dotenv'
// import { TransactionContext } from './TransactionsContext.jsx';

// dotenv.config()




// const SomeComponent = () => {
//   const { currentAccount, connectWallet } = useContext(TransactionContext);

//   const BuyProjectHandle = async () => {
//     if (!currentAccount) {
//       await connectWallet();
//     }

//     const demoContract = new ethers.Contract(contractAddress, abi , provider);
//     const options = {value: ethers.utils.parseEther(ether)};
//     await demoContract.BuyProject(idProject,options);  
//   }
// }

// // Variables

// let idProject = 1;// THIS MUST BE FRONT END DATA
// let amount = {} // THIS MUST BE FRONT END IMPUT
// let ether = 0.01 * amount;  // THIS MUST BE PROJECT PRICE VALUE FROM CONTRACT


// const contractAddress = '0xDB2248B84B3629ed8Fa09A83B431Dc5e8E40F46f';
// const abi = [
//   {
//     "inputs": [],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "name": "BuyProject",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_id",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_price",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_tokensToSell",
//         "type": "uint256"
//       }
//     ],
//     "name": "SetProject",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "name": "Withdraw",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_id",
//         "type": "uint256"
//       }
//     ],
//     "name": "getProject",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_id",
//         "type": "uint256"
//       },
//       {
//         "internalType": "address",
//         "name": "_user",
//         "type": "address"
//       }
//     ],
//     "name": "infoInvestor",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]

// // ALCHEMY SDK NODE PROVIDER
// const settings = {
//     apiKey: process.env.A_Key, // Replace with your Alchemy API Key.
//     network: Network.MATIC_MUMBAI, // Replace with your network.
//   };  
// const alchemy = new Alchemy(settings);
// const provider = await alchemy.config.getProvider();


// // INSTANCE A CONTRACT OBJECT
// const demoContract = new ethers.Contract(contractAddress, abi , provider);


// //Buy Project bottom
// const BuyProject = async() => {
//     const options = {value: ethers.utils.parseEther(ether)};
//     await demoContract.BuyProject(idProject,options);
// }

// // GET INFO PROJECT TO FRONT END
// const GetInfoProject = async () => {
//   const result = await demoContract.getProject(idProject);
//   const value1 = result[0].toNumber();
//   const value2 = result[1].toNumber();
//   const value3 = result[2].toNumber();
//   setInfoProject({value1, value2, value3});
// }

// // GET INFO INVESTOR TO FRONT END

// const GetInvestor = async () => {
//   const result = await demoContract.getProject(idProject);
//   const address = result[0].toString();
//   const value2 = result[1].toNumber();
//   const value3 = result[2].toNumber();
//   const value4 = result[2].toNumber();
//   setInvestor({value1, value2, value3, value4, address});
// }

// return (
//   <button onClick={BuyProjectHandle}>BuyProject</button>
// )

