import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./src/routes/user.route.js";
import connectDB from "./src/config/db.js";

dotenv.config();
connectDB();

const app = express();

//middleware
app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "App is running..."
    })
});

app.use("/api/users", userRoute);


const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})