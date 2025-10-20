
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//load enviroment variables from 
dotenv.config();
const stripe = require('stripe')(process.env.PAYMENT_GETWAY_KEYS);
const app = express();
const port = process.env.PORT || 5000;

//use for middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i8aog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db('parcelDB');
    const parcelCollection = db.collection('parcels');

    app.get('/parcels', async(req, res)=>{
        const parcels = await parcelCollection.find().toArray()
        res.send(parcels)
    });

//parcel api
app.get('/parcels', async(req, res) => {
  try{
    const userEmail = req.query.email;
    const query = userEmail ? { created_by: userEmail} : {};
    const options = {
      sort: { createdAt: -1},
  
    }
    const parcels = await parcelCollection.find(query, options).toArray();
    res.send(parcels);
  }catch (error){
    console.log('Error fetching parcels', error)
    res.status(500).send({message: 'Failed to get parcels'})
  }
})

app.get('/parcels/:id', async(req, res)=>{
  try{
    const id = req.params.id;
    const parcel = await parcelCollection.findOne({ _id: new ObjectId(id)})
    if(!parcel){
      return res.status(404).send({message:'parcel not found'})
    }
    res.send(parcel)
  }catch(error){
    console.error(error)
    return res.status(500).send({message:"Failed to get parcel"})
  }
})


    app.post('/parcels', async(req, res)=>{
    try {
        const newParcel = req.body;
        const result = await parcelCollection.insertOne(newParcel);
        res.status(201).send(result);
    } catch (error) {
        console.error('Error inserting:', error);
        res.status(500).send({ message: error.message });
    }
});


  app.delete('/parcels/:id', async (req, res) => {
      try {
          const id = req.params.id;
          const result = await parcelCollection.deleteOne({ _id: new ObjectId(id) });
          res.send(result);
      } catch (error) {
        console.error('Error deleting parcel:', error);
        res.status(500).send({ message: 'Failed to delete parcel' });
     }
 });

 //custom payment get way api 

 app.post('/create-payment-intent', async (req, res) => {
  const amountInCents = req.body.amountInCents
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Amount in cents
      currency: 'usd',
      automatic_payment_methods: {enabled: true},
    });

    res.json({clientSecret: paymentIntent.client_secret});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


//sample route
app.get('/', (req, res) =>{
    res.send('Parcel server is running')
})

//start the server

app.listen(port, () =>{
    console.log(`sever is listen on the port ${port}`);
})