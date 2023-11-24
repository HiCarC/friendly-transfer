// Import necessary modules from the Sygma SDK and ethers library
// import {
//     EVMAssetTransfer,
//     Environment,
//     getTransferStatusData,
//   } from "@buildwithsygma/sygma-sdk-core";
// import { Wallet, providers } from "ethers";
// import dotenv from "dotenv";

// Load environment variables from the .env file
// dotenv.config();

// Retrieve private key from environment variables
// const privateKey = process.env.PRIVATE_KEY;

// Throw an error if private key is missing
// if (!privateKey) {
//   throw new Error("Missing environment variable: PRIVATE_KEY");
// }

// Define chain IDs and resource ID
// const SEPOLIA_CHAIN_ID = 11155111;
// const GOERLI_CHAIN_ID = 5; // Replace with the actual Goerli chain ID
// const RESOURCE_ID =
//   "0x0000000000000000000000000000000000000000000000000000000000000300";

// Define a function to get the status of a transaction
// const getStatus = async (
//   txHash: string
// ): Promise<{ status: string; explorerUrl: string } | void> => {
//   try {
//     // Get transfer status data from the Sygma SDK
//     const data = await getTransferStatusData(Environment.TESTNET, txHash);

//     // Return the status data
//     return data as { status: string; explorerUrl: string };
//   } catch (e) {
//     // Log an error if there is an exception
//     console.log("error:", e);
//   }
// };

// Define the main cross-chain governance transfer function
// export async function crossChainGovernanceTransfer(): Promise<void> {
//   // Create JSON RPC providers for Goerli and Sepolia chains
//   const goerliProvider = new providers.JsonRpcProvider(
//     "https://rpc.goerli.eth.gateway.fm/"
//   );
//   const sepoliaProvider = new providers.JsonRpcProvider(
//     "https://rpc.sepolia.eth.gateway.fm/" // Replace with the actual Sepolia RPC URL
//   );

//   // Create a wallet using the private key and the Goerli provider
//   const wallet = new Wallet(privateKey ?? "", goerliProvider);

//   // Create an instance of EVMAssetTransfer from the Sygma SDK
//   const assetTransfer = new EVMAssetTransfer();

//   // Initialize the asset transfer instance with the Sepolia provider and the TESTNET environment
//   // @ts-ignore-next-line
//   await assetTransfer.init(sepoliaProvider, Environment.TESTNET);

//   // Check if JSON RPC providers are available
//   if (!goerliProvider || !sepoliaProvider) {
//     // Log an error message and return if providers are not available
//     console.error("Error: JSON RPC provider not available.");
//     return;
//   }

//   // Create a fungible transfer from Goerli to Sepolia
//   const transfer = await assetTransfer.createFungibleTransfer(
//     await wallet.getAddress(),
//     SEPOLIA_CHAIN_ID,
//     await wallet.getAddress(), // Sending to the same address on a different chain
//     RESOURCE_ID,
//     "5000000000000000000" // 18 decimal places
//   );

//   // Get the fee for the transfer
//   const fee = await assetTransfer.getFee(transfer);

//   // Build and send approvals for the transfer
//   const approvals = await assetTransfer.buildApprovals(transfer, fee);
//   for (const approval of approvals) {
//     const response = await wallet.sendTransaction(
//       approval as providers.TransactionRequest
//     );
//     console.log("Sent approval with hash: ", response.hash);
//   }

//   // Build and send the transfer transaction
//   const transferTx = await assetTransfer.buildTransferTransaction(
//     transfer,
//     fee
//   );
//   const response = await wallet.sendTransaction(
//     transferTx as providers.TransactionRequest
//   );

//   // Log the transfer hash
//   console.log("Sent transfer with hash: ", response.hash);

//   // Initialize a variable to store transfer status data
//   let dataResponse: undefined | { status: string; explorerUrl: string };

//   // Set up an interval to check the status of the transfer
//   const id = setInterval(async () => {
//     // Get the status data for the transfer
//     const statusData = await getStatus(response.hash);

//     // Update the dataResponse variable
//     if (statusData) {
//       dataResponse = statusData;
//       console.log("Status of the transfer", dataResponse.status);
//     }

//     // Check if the transfer is executed
//     if (dataResponse && dataResponse.status === "executed") {
//       console.log("Transfer executed successfully");
//       clearInterval(id); // Clear the interval
//       process.exit(0); // Exit the process
//     }
//   }, 5000); // Check status every 5 seconds
// }

// Execute the cross-chain governance transfer function
// crossChainGovernanceTransfer().finally(() => {});
