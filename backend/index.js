const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Firebase DB Setup ---------------------------------------------
const admin = require("firebase-admin");
const serviceAccount = require("./codemen-users-firebase-adminsdk.json"); // Service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore(); // Firestore DB instance
// ---------------------------------------------------------------

const app = express(); // Create an express app
const PORT = 5000; // Port on which the server will run

// Middleware
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors()); // To enable CORS for all requests
app.use(morgan("dev")); // To log the incoming requests


// API Endpoints -------------------------------------------------

// Get all users (GET /users)
app.get("/users", async (req, res) => {
  try {
    const userCollection = db.collection("users"); // Reference to the users collection in the DB
    const snapshot = await userCollection.get(); // Get all the documents(users) in the users collection

    const users = [];
    snapshot.forEach((doc) => { // Loop through the documents(users) in the users collection and add them to the users array
      const id = doc.id;
      const data = doc.data(); // Get the data of the document(user)
      users.push({ id, ...data }); // Add the user to the users array
    });
    res.status(200).send(users); // Send the users array as the response
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add a new user (POST /users)
app.post("/users", async (req, res) => {
  try {
    const newUser = req.body;
    console.log('newUser', newUser)
    const docId = String(newUser.id);
    const userCollection = db.collection("users");
    const result = await userCollection.doc(docId).set(newUser);
    console.log('result', result)
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a user (PUT /users/:id)
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    console.log('updatedUser', updatedUser)
    const userCollection = db.collection("users");
    await userCollection.doc(id).update(updatedUser);
    res.status(200).send(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send(error.message);
  }
});

// Delete a user (DELETE /users/:id)
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userCollection = db.collection("users");
    await userCollection.doc(id).delete();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Instructions for empty path (GET /)
app.get("/", (req, res) => {
  const apiInstructions = `
    <h1>Hi Codemen! Try these:</h1>
    <h3>Get all users</h3>
    <p>GET /users</p>
    <h3>Add a new user</h3>
    <p>POST /users</p>
    <h3>Update a user</h3>
    <p>PUT /users/:id</p>
    <h3>Delete a user</h3>
    <p>DELETE /users/:id</p>
    `;
  res.send(apiInstructions);
});
// ---------------------------------------------------------------

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
