const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {

  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db("datbase");      
  const collection = db.collection("cust");  

  const result = await collection.find().toArray();

  console.log(result);

  await client.close();
}

run();
