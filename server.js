const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//routes
//app.use("/v1/role", require("./routes/roleRouter.js"));
app.use("/v1/auth", require("./routes/authRouter"));
//app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
//app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
//app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 3000;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_NODE} Mode On Port ${process.env.PORT}`
      .bgBlue.white
  );
});
