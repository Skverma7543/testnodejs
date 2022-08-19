const { MongoClient } = require("mongodb");
const express=require('express')
const app=express()

const port=process.env.PORT || 4202
// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://javascript:javascript@cluster0.a9uny.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
var data=null;
async function run() {
  try {
    const database = client.db('test');
    const movies = database.collection('Student');

    // Query for a movie that has the title 'Back to the Future'
    const query = { city: 'chaibasa' };
    const movie = await movies.find(query).toArray();
    data=movie
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

app.get('/student',(req,res)=>{
    res.write(JSON.stringify(data))
    res.end()
}).listen(port)