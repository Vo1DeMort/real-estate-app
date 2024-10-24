import jwt from "jsonwebtoken";

export const isLogin = (req, res, next) => {
  const token = req.cookies.token;
  console.log("token", token);
  if (!token) {
    return res.status(401).json({ msg: "you are not authenticated" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, payload) => {
    if (error) {
      return res.status(403).json({ msg: "token is invalid" });
    }

    req.userId = payload.id; // allow to access the id of login user
    next();
  }); // payload refers to the user info from jwt.sign
};
