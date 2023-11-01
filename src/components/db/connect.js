// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// let client;
// let clientPromise;

// if (!process.env.NODE_ENV === 'production') {
//   // In development mode, use a global variable to share the connection across requests
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, use a separate connection for each request
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default async function database(req, res, next) {
//   try {
//     req.dbClient = await clientPromise;
//     req.db = req.dbClient.db();
//   } catch (error) {
//     console.error('Error connecting to the database');
//   }
//   return next();
// }

 
// // const { MongoClient, ServerApiVersion } = require('mongodb');
// // const uri = "mongodb+srv://mighty5:<password>@cluster0.22agoyr.mongodb.net/?retryWrites=true&w=majority";

// // // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// // const client = new MongoClient(uri, {
// //   serverApi: {
// //     version: ServerApiVersion.v1,
// //     strict: true,
// //     deprecationErrors: true,
// //   }
// // });

// // async function run() {
// //   try {
// //     // Connect the client to the server	(optional starting in v4.7)
// //     await client.connect();
// //     // Send a ping to confirm a successful connection
// //     await client.db("admin").command({ ping: 1 });
// //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
// //   } finally {
// //     // Ensures that the client will close when you finish/error
// //     await client.close();
// //   }
// // }
// // run().catch(console.dir);
