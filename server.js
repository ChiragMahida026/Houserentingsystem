const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect Database
connectDB();

app.get("/", (req, res) => res.send("API Starting"));

//Define Routes
app.use(
  "/api/customer_registration",
  require("./routes/api/customer_registration")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started ${PORT}`));
