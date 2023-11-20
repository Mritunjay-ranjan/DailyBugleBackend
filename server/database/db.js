import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL=`mongodb://${username}:${password}@ac-tnw6pdn-shard-00-00.fpoo15i.mongodb.net:27017,ac-tnw6pdn-shard-00-01.fpoo15i.mongodb.net:27017,ac-tnw6pdn-shard-00-02.fpoo15i.mongodb.net:27017/?ssl=true&replicaSet=atlas-vt2sdv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting to the database ', error);

    }
}

export default Connection;
