const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect Database
connectDB();

app.get("/", (req, res) => res.send("API Starting"));

//Init Middleware
// @ts-ignore
app.use(express.json({extended:false}));

//Define Routes
app.use(
  "/api/customer_registration",
  require("./routes/api/customer_registration")
);
app.use(
  "/api/landlord_registration",
  require("./routes/api/landlord_registration")
);
app.use("/api/auth", require("./routes/api/auth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started ${PORT}`));
