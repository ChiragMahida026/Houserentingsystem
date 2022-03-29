const express = require("express");
const connectDB = require("./config/db");

const session = require("express-session");

const app = express();

//connect Database
connectDB();

//Init Middleware
// @ts-ignore
app.use(express.json({ extended: false }));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

//Define Routes
app.use(
  "/routes/api/customer_registration",
  require("./routes/api/customer_registration")
);
//Define Routes
app.use(
  "/routes/api/customer_registration",
  require("./routes/api/customer_registration")
);

// app.use("/routes/api/sendmail", require("./routes/api/sendmail"));
// app.use(
//   "/routes/api/landlord_registration/email",
//   require("./routes/api/email")
// );

app.use("/routes/api/email", require("./routes/api/email"));
app.use("/routes/api/sendmail", require("./routes/api/sendmail"));

app.use(
  "/routes/api/landlord_registration",
  require("./routes/api/landlord_registration")
);
app.use("/routes/api/auth", require("./routes/api/auth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started ${PORT}`));
