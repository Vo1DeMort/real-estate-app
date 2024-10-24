import prisma from "../prismaClient.js";

export const posts = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to get posts" });
  }
};
export const post = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to get post" });
  }
};
export const createPost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to create post" });
  }
};
export const updatePost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to update post" });
  }
};
export const deletePost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to delete post" });
  }
};
