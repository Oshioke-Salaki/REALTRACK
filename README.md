chain: base-sepolia
contract address: 0x0EFE8a01210ba502B35Ca2A82095B45c51406ff6 
contract Link: https://sepolia.basescan.org/address/0x0efe8a01210ba502b35ca2a82095b45c51406ff6#code


### Overview
This repository contains the code and documentation for our IoT-based agriculture solution that integrates humidity and temperature sensors to monitor real-time environmental conditions both on the farm and in logistics vehicles. The collected data is transmitted to a smart contract, which then forwards the data to a subgraph. The subgraph indexes the data and makes it available to our front-end application, where an AI system provides recommendations based on the analyzed data.

### Features
Real-time Data Collection: Humidity and temperature sensors collect live data from the farm and logistics vehicles.
Blockchain Integration: Data is transmitted to a smart contract for secure and immutable recording.

### Subgraph Indexing: 
The subgraph indexes the data, making it easily accessible for querying.
AI-Powered Recommendations: The front-end application uses AI to analyze the data and provide actionable insights.
Architecture

### IoT Sensors:

Humidity and Temperature Sensors: 
Deployed on the farm and in logistics vehicles to collect environmental data.

Data Transmission: 
Sensors transmit data to the smart contract.

### Smart Contract:

Data Reception: Receives data from IoT sensors.
Data Storage: Securely stores the data on the blockchain.

### Subgraph:

Data Indexing
Indexes the data from the smart contract for efficient querying.
Importance: The subgraph plays a crucial role by organizing and making the data easily accessible. This enables quick retrieval of data for analysis, ensuring the front-end application can provide timely and accurate recommendations.
Front-End Application:

Data Visualization: Displays real-time data from the farm and logistics vehicles.
AI Recommendations: Uses AI algorithms to analyze the data and provide recommendations for improving crop yield and logistics efficiency.
