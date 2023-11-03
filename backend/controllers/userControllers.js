const db = require("../config/config") // import the Firestore DB instance

// Get all users.
exports.getAllUsers = async (req, res) => {
  try {
    const userCollection = db.collection("users"); // in Firestore, a collection is like a table in a database
    const snapshot = await userCollection.get(); // get all the documents in the collection. A document is like a row in a table

    const users = [];
    snapshot.forEach((doc) => {
      const id = doc.id; // document id = row id = user id
      const data = doc.data();
      users.push({ id, ...data });
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Add a user. Data is validated in client side.
exports.addUser = async (req, res) => {
  try {
    const newUser = req.body; 
    const docId = String(newUser.id);
    const userCollection = db.collection("users");
    await userCollection.doc(docId).set(newUser);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update a user. Data is validated in client side.
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    const userCollection = db.collection("users");
    await userCollection.doc(id).update(updatedUser);
    res.status(200).send(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send(error.message);
  }
};

// Delete a user.
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userCollection = db.collection("users");
    await userCollection.doc(id).delete();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
