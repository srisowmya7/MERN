const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs =require('./schema')
const resolvers=require('./resolvers')
const userApiFromRoouter =require('./routes/userRoutes')
const app = express();
const port = 3001
const url = "mongodb+srv://Gayatri:setky0-sigvoM-kurcen@cluster0.zpdeidm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(express.json())//parsing
mongoose.connect(url).then(()=>{console.log('MONGODB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRoouter)
            
 
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log('server live 3001');
    })
}
function Testing(){
    return 0;
}
Testing();
StartServer();




