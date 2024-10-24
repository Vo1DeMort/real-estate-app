import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  try {
    const hashedpwd = await bcrypt.hash(password, 10);
    console.log(hashedpwd);

    const newUser = await prisma.user.create({
      data: {
        // should impore username or email already exist
        username,
        email,
        password: hashedpwd,
      },
    });

    console.log(newUser);

    res.status(201).json({ msg: "new user creation success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "fialed to create a new user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      return res.status(401).json({ msg: "invalid credentials" });
    }

    const isPasswdValid = await bcrypt.compare(password, user.password);
    if (!isPasswdValid) {
      return res.status(401).json({ msg: "invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        //isAdmin: true,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 1000 * 60 * 60 * 24 * 7,
      },
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        //secure:true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .status(200)
      .json(userInfo);
    //.json({ msg: "login success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ msg: "logout success" });
};
