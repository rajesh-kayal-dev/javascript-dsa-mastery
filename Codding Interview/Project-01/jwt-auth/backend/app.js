import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();
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

app.use("/api/auth", authRoute);


const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})