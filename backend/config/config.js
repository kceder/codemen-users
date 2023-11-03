const admin = require("firebase-admin");
const serviceAccount = require("../codemen-users-firebase-adminsdk.json"); // import the Firebase admin SDK private key

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore(); // Firestore DB instance

module.exports = db;
