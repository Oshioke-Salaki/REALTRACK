require('dotenv').config();
const ethers = require('ethers'),
    fs = require('fs'),
    abi = require('../abis/abi.json'),
    OpenAI = require("openai");

const encryptedKey = fs.readFileSync("./.encryptKey.json", "utf8");
const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


exports.updateTemperature = async (req, res) => {

    const {temp, hum} = req.body;

    try {

        let wallet = await ethers.Wallet.fromEncryptedJson(encryptedKey, process.env.PRIVATE_KEY_PASSWORD);

        wallet = wallet.connect(provider);

        // get smart contract instance with ethers
        const contract =  new ethers.Contract(process.env.IOT_CONTRACT_BASE, abi, wallet);

        // make call to contract to create event
        const transaction = await contract.updateSensorData(temp, hum);
        // await reciept
        const reciept = await transaction.wait()

        res.json({message: "succcess", data: reciept});
        
    } catch (error) {
        return res.status(400).json({error: error, message: error.message});
    }
}

exports.getAiUpdates = async (req, res) => {
    try {

        // const {prompt} = req.body

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "what is the effect of humidity of 48 and temperature of 38degree on beans plantation" }],
            model: "gpt-4-turbo",
        });

        if(!completion){
            throw new Error('Error sending request !')
        }

        if(completion){
            return res.status(200).json({message: 'successful', data: completion.choices[0].message })
        }

    } catch (error) {
        return res.status(400).json({error: error, message: error.message});
    }
}


module.exports = exports;