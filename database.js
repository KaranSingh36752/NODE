const { MongoClient,ObjectId } = require('mongodb');

const url = 
   "mongodb+srv://karansingh36752:dw0nWOUqPSk9n8aJ@nodejsnamaste.xfmxb.mongodb.net/"

const client = new MongoClient(url);

const dbName = 'HelloWorld';
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    const data = {
        "first_name" : "Gaurang",
        "last_name" : "shandily",
        "age" : 20,
        "mobile_no" : "4567398423",
        "gender" : "Male",

    }

   // Inserting the data
    // const result = await collection.insertOne(data)
    // console.log("the inserted Data =>" ,result);
  
    //Update the data
    // const updateResult = await collection.updateOne({_id: new ObjectId('66fcaf4acc3b29faeadbe273')},{$set: {first_name : "Aryan" , last_name : "Sharma"}});
    // console.log(updateResult)

    //Delete operation
    const deleteResult = await collection.deleteOne({first_name:"Aman"});
    console.log(deleteResult);
  
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  

    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());