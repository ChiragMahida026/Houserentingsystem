const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect Database
connectDB();

//Init Middleware
// @ts-ignore
app.use(express.json({ extended: false }));

//Define Routes
app.use(
  "/routes/api/customer_registration",
  require("./routes/api/customer_registration")
);
app.use(
  "/routes/api/landlord_registration",
  require("./routes/api/landlord_registration")
);
app.use("/api/auth", require("./routes/api/auth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started ${PORT}`));
