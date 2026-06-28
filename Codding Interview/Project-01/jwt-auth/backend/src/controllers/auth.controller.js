import jwt from "jsonwebtoken";

export const login = (req, res) => {
    const { email, password } = req.body;

    if (email !== "rajesh@gmail.com" || password !== "Rk1234") {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials",
        });
    }

    const payload = {
        id: 1,
        name: "Rajesh",
        email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    res.status(200).json({
        success: true,
        token,
    });
};
export const getProfile = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            user: req.user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};