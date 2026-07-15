import User from "../models/User.js";


export const createUser = async (req, res) => {
  try {

    const { name, email, age } = req.body;

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Users already exists",
      })
    }

    const user = await User.create({
      name,
      email,
      age
    });

    res.status(201).json({
      success: true,
      message: "Users create succesfully",
      data: user
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    })
  }
}

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();

    res.status(201).json({
      success: true,
      count: user.length,
      data: user
    })

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user
    })

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user
    })

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    })
  }
}
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user
    })

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    })
  }
}