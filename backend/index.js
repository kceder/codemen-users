const express = require("express"); // express for handling HTTP requests
const cors = require("cors"); // cors for handling cross-origin resource sharing
const morgan = require("morgan"); // morgan for logging HTTP requests
const userRoutes = require('./routes/userRoutes'); // userRoutes for handling user routes
const PORT = 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use('/users', userRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
