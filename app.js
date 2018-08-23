//YOUTUBE finihsed 10 https://youtu.be/5RGEODLhjhY
//YOUTUBE finished 17 https://youtu.be/DU77lbBPfBI

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://Thighmaster:test123@ds229552.mlab.com:29552/gql-ninja', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000,() =>{
  console.log('now listening for requests on port 4000')
});
