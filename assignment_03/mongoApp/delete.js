const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("datbase");    
    const collection = db.collection("cust");  

    const customers = await collection.find().toArray();
    console.log("All Customers:");
    console.log(customers);

    
    const deleteResult = await collection.deleteOne({ name: "rohit" });
    const findname= await collection.findOne({name:"Virat Kohali"});

    console.log("Deleted Count:", deleteResult.deletedCount);
    console.log("find name:",findname);

  } catch (error) {

    console.error("Error:", error.message);

  } finally {

    await client.close();
    console.log("Connection closed");

  }
}

run();
