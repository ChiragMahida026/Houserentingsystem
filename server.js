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

app.use("/routes/api/addhouse", require("./routes/api/addhouse"));
app.use("/routes/api/viewhouse", require("./routes/api/viewhouse"));
app.use("/routes/api/updatehouse", require("./routes/api/updatehouse"));
app.use("/routes/api/deletehouse", require("./routes/api/deletehouse"));

app.use("/routes/api/updateprofile", require("./routes/api/updateprofile"));
app.use("/routes/api/viewprofile", require("./routes/api/viewprofile"));
app.use("/routes/api/deleteprofile", require("./routes/api/deleteprofile"));
app.use("/routes/api/viewallprofile", require("./routes/api/viewallprofile"));
app.use("/routes/api/viewspprofile", require("./routes/api/viewspprofile"));

app.use("/routes/api/requesthome", require("./routes/api/requesthome"));
// app.use("/routes/api/responsehome", require("./routes/api/responsehome"));

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
