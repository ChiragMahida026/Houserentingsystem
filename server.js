const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

//connect Database
connectDB();

//Init Middleware
// @ts-ignore
app.use(express.json({ extended: false }));

// app.use(express.urlencoded({ extended: true }));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
  })
);

app.use(cookieParser());

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
app.use("/routes/api/responsehome", require("./routes/api/responsehome"));

app.use("/routes/api/pincode", require("./routes/api/pincode"));

// app.use("/routes/api/sendmail", require("./routes/api/sendmail"));
// app.use(
//   "/routes/api/landlord_registration/email",
//   require("./routes/api/email")
// );

app.use("/routes/api/email", require("./routes/api/email"));
app.use("/routes/api/sendmail", require("./routes/api/sendmail"));

app.use("/routes/api/logout", require("./routes/api/logout"));

app.use(
  "/routes/api/landlord_registration",
  require("./routes/api/landlord_registration")
);
app.use("/routes/api/auth", require("./routes/api/auth"));

//Call Api in admin side
app.use(
  "/dashadmin/routes/api/viewallprofile",
  require("./routes/api/viewallprofile")
);
app.use("/dashadmin/routes/api/addhouse", require("./routes/api/addhouse"));
app.use("/dashadmin/routes/api/viewhouse", require("./routes/api/viewhouse"));
app.use("/dashadmin/routes/api/logout", require("./routes/api/logout"));

//call Api in customer side
app.use(
  "/dashcust/routes/api/viewprofile",
  require("./routes/api/viewprofile")
);
app.use(
  "/dashcust/routes/api/updateprofile",
  require("./routes/api/updateprofile")
);
app.use("/dashcust/routes/api/logout", require("./routes/api/logout"));

//call api landlord side
app.use("/dashlandlord/routes/api/logout", require("./routes/api/logout"));
app.use(
  "/dashlandlord/routes/api/viewprofile",
  require("./routes/api/viewprofile")
);
app.use("/dashlandlord/routes/api/addhouse", require("./routes/api/addhouse"));

app.use(
  "/dashlandlord/routes/api/viewhouse",
  require("./routes/api/viewhouse")
);
app.use(
  "/dashlandlord/routes/api/deletehouse",
  require("./routes/api/deletehouse")
);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started ${PORT}`));
