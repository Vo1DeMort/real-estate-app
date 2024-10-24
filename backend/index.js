// pkg
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// local
import authRoute from "./routes/auth.routes.js";
//import authorizationRoute from "./routes/test.routes.js";
import userRoute from "./routes/user.routes.js";

const app = express();

//middlewares
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // credentials is for cookies
app.use(express.json());
app.use(cookieParser());

//end points
app.use("/api/auth", authRoute);
//app.use("/api/authorization", authorizationRoute); // this might not be needed anymore, i have middlewares now
app.use("/api/user", userRoute);

// actiate server
app.listen(8000, () => {
  console.log("server is ready ");
});

// 2:25 hr

// have an error with is login middleware and updating ,
