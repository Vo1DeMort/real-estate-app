import prisma from "../prismaClient.js";

export const posts = async (req, res) => {
  const query = res.query;
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 100000000,
        },
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to get posts" });
  }
};

export const post = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        // get realted postDetail and user model data
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to get post" });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  const user_id = req.userId;
  try {
    const newPost = prisma.post.create({
      data: {
        ...body.postData,
        userId: user_id,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to create post" });
  }
};

/* update is not done yet */
export const updatePost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to update post" });
  }
};

export const deletePost = async (req, res) => {
  const post_id = req.params.id;
  const user_id = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { post_id },
    });

    if (post.userId !== user_id) {
      return res.status(403).json({ msg: "not allowed" });
    }

    await prisma.post.delete({
      where: { post_id },
    });

    res.status(200).json({ msg: " successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "failed to delete post" });
  }
};
