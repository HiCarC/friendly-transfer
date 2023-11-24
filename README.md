<div align="center">
    <h1>Friendly Sygma SDK <img src="assets/logo.svg" alt="" height="26px"></h1>
</div>

## Overview

This repository represents the evolution of the work carried out by the Sigma Males team. In our exploration of the Sygma ecosystem and the development of new hooks and use cases, we encountered challenges understanding the usage of Sygma tools. To address this, we embarked on creating a prototype for a user-friendly and explanatory onboarding experience for Sygma users.

## Project Details

### Frontend Onboarding

Frontend onboarding is identified as one of the most effective ways to introduce new users to the Sygma ecosystem. We focused on the EVM to EVM transfer tool, aiming to simplify its explanation through a user-friendly interface. The result is a server that communicates the outcome to users instantly upon clicking the "Transfer Assets" button, providing transaction details such as the approval transaction hash and the transfer hash (deposit event).

### Problem Statement

Our primary goal is to address the challenges we personally faced and provide a solution. We plan to extend this approach to all developing tools, ensuring new users can easily understand their functionalities through clear and simple design, empowering them to build seamlessly.

## Development Goals

### Cross-Chain Governance

Our second ambition involved the development of a TypeScript file to enable Cross-Chain Governance. This feature aims to extend governance participation by allowing token holders to vote on proposals and decisions across different blockchain networks. While the file has been created and initial work has been done, time constraints prevented us from implementing a frontend for this feature.

## Installation

1. Clone the repository.
2. Navigate to `/example/friendly-evm-to-evm-fungible-transfer/`.
3. Insert your Private Key into a `.env` file (`PRIVATE_KEY="YOUR_PRIVATE_KEY"`).
4. Go back to the root directory and run the following commands:
    - `yarn install`
    - `yarn sdk:build`
    - `yarn run transfer` (to execute the transfer).

To launch the web, navigate to the `src` directory and run `server.js` using the terminal command `node server.js`.
