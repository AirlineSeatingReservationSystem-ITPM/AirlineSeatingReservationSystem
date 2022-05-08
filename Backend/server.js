const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8085;

app.use(cors());

// app middleware
app.use(bodyParser.json());

app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  /* useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopologyL: true,
  useFindAndModify: false */
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

const paymentRouter = require("../Backend/routes/paymentManagement/payment");
const bookingRouter = require("../Backend/routes/bookingform");

app.use("/Payment", paymentRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});

//this catches front-end URL
/* http://localhost/8070/student */

app.use("/api/auth", require("./routes/auth"));
app.use("/displayUsers", require("./routes/auth"));
app.use("/editUser", require("./routes/auth"));
//app.use("/products" , require("./routes/product"));
app.use("/complain", require("./routes/complain"));
app.use("/bookingform",bookingRouter);

//Error Handler (Should be the last piece of middleware)
//app.use(errorHandler);

const userRouter = require("./routes/user.js");
app.use("/api/auth", require("./routes/auth"));

//meal
const MealRouter = require("./routes/meal.js");
app.use("/meals", MealRouter);

//chandima
const flightRouter = require("./routes/flight.js");
app.use("/flights", flightRouter);

// RefundRequest
const refundRequestsRouter = require("../Backend/routes/PaymentManagement/refundRequests");
app.use("/RefundRequests", refundRequestsRouter);
