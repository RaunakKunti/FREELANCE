const express = require("express");
const router = require("./router/auth-route.js");
const contactRouter = require("./router/contact-route.js");
const connectDB = require("./utils/database.js");
const services = require("./router/service-router.js");
const errorMiddleware = require("./validate_middleware/error-middleware.js");
const adminAlluserData = require("./router/admin-router.js");
const cors = require("cors");

const app = express();

//connection between frontend and baackend
const corsOptions = {
  origin: "http://localhost:5173",
  origin: "https://deploy-mern-1whq.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/contact", contactRouter);
app.use("/api/data", services);

//admin pannel route
app.use("/api/admin", adminAlluserData);

const port = 3000;
app.use(errorMiddleware);
connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server is running on port 3000");
  });
});
