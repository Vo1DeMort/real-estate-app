// pkg
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// local
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import postRoute from "./routes/post.routes.js";

const app = express();

//middlewares
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // credentials is for cookies
app.use(express.json());
app.use(cookieParser());

//end points
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

// actiate server
app.listen(8000, () => {
  console.log("server is ready ");
});

// 3:14hr

/* adding latitude and longitude manually is not  optimal  ,how can i do this better */
