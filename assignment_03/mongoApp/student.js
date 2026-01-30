const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("collegeDb2");
    const collection = db.collection("student");

    await collection.deleteMany({});
    console.log("Old data deleted");

    const students = [
      { name: "Ritesh", age: 21 },
      { name: "Shubham", age: 22 },
      { name: "Gitesh", age: 20 },
      { name: "Harish", age: 23 },
      { name: "Harshal", age: 24 }
    ];

    await collection.insertMany(students);
    console.log("Records inserted successfully");

    const data = await collection.find().toArray();
    console.log("All Students:");
    console.log(data);

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

run();
