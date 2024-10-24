import prisma from "../prismaClient.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to get users" });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id; // if i am access id like this, why would i need id in the custom middleware ?
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to get single user" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  // should have done hashing in the db
  const { password, avatar, ...inputs } = req.body;

  // console.log("id", id);
  // console.log("token", id);

  // athorization purpose
  if (id !== tokenUserId) {
    return res
      .status(403)
      .json({ msg: "not authorized for this particular action" });
  }

  let updatedPassword = null;
  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    const { password: userPassword, ...data } = updatedUser;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to update single user" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenId = req.userId;

  // why compare ,the user gonna be the same anyway in my opinion
  if (id !== tokenId) {
    return res
      .status(403)
      .json({ msg: "not authorized for this particular action" });
  }
  try {
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ msg: "deleting profile is success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to delete single user" });
  }
};
