const admin = require("firebase-admin");

// Path to the file you just shared
const serviceAccount = require("./brgy-system-44d04-firebase-adminsdk-fbsvc-2fe8f20a62.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://brgy-system-44d04-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
console.log("Admin SDK initialized successfully!");