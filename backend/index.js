const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Important: to parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

// Import and mount routes
const expenseRoutes = require("./routes/expense");
app.use("/expenses", expenseRoutes); // ✅ Now POST /expenses will work

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config()
// const app=express();

// app.use(cors());

// mongoose.connect(process.env.DB_CONNECTION).then(()=>{
//     console.log('DB connection is successful')
// }).catch((err)=>{
//     console.log(err)
// })

// app.listen(process.env.PORT,()=>{
//     console.log(`Server is running on post ${process.env.PORT}`)
// })
