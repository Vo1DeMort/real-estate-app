import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res) => {
  // get the tokenn stored in browser
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "you are not authenticated" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, payload) => {
    if (error) {
      return res.status(403).json({ msg: "token is invalid" });
    }
  }); // payload refers to the user info from jwt.sign

  res.status(200).json({ msg: "you are authenticated" });
};

export const isAdmin = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "you are not authenticated" });
  }

  // payload must have info about admin
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, payload) => {
    if (error) {
      return res.status(403).json({ msg: "token is invalid" });
    }
    if (!payload.isAdmin) {
      return res
        .status(403)
        .json({ msg: "you are not authorized for this action" });
    }
  }); // payload refers to the user info from jwt.sign

  res.status(200).json({ msg: "you are authenticated" });
};
