import User from "../models/User.js";


export const seedUsers = async (req, res) => {
  try {
    await User.deleteMany();

    const users = await User.insertMany([
      {
        name: "Rajesh",
        email: "rajesh@gmail.com",
        age: 22,
        password: "123456",
      },
      {
        name: "Amit",
        email: "amit@gmail.com",
        age: 22,
        password: "123456",
      },
      {
        name: "Rahul",
        email: "rahul@gmail.com",
        age: 24,
        password: "123456",
      },
      {
        name: "Priya",
        email: "priya@gmail.com",
        age: 24,
        password: "123456",
      },
      {
        name: "Ankit",
        email: "ankit@gmail.com",
        age: 24,
        password: "123456",
      },
    ]);

    res.status(201).json({
      success: true,
      message: "Dummy users inserted",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserByAge = async (req, res) => {
    try {
        const user = await User.aggregate([
            {
                $group: {
                    _id: "$age",
                    count: {
                        $sum: 1,
                    }
                }
            }
        ])

        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}