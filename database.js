const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbConnection = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('Database online');
        
    } catch (error) {
        console.log(error);
        throw new Error(`Error when starting the database: ${error}`);
    
    }
}

module.exports = { dbConnection };