import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL=`mongodb://${username}:${password}@ac-g2uelly-shard-00-00.fnc8ld5.mongodb.net:27017,ac-g2uelly-shard-00-01.fnc8ld5.mongodb.net:27017,ac-g2uelly-shard-00-02.fnc8ld5.mongodb.net:27017/?ssl=true&replicaSet=atlas-4p74mj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting to the database ', error);

    }
}

export default Connection;