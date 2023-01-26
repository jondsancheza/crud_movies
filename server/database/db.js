import mongoose from "mongoose";



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-tuor9qz-shard-00-00.aha85bo.mongodb.net:27017,ac-tuor9qz-shard-00-01.aha85bo.mongodb.net:27017,ac-tuor9qz-shard-00-02.aha85bo.mongodb.net:27017/?ssl=true&replicaSet=atlas-rv2lnn-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected succesfully')
    } catch (e) {
        console.log('Error while connecting with the database', e)
    }
}

export default Connection;