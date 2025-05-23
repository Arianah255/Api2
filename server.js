import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

// Load environment variables
dotenv.config();
console.log("MONGO URI:", process.env.MONGODB_URI); // <--- Línea de depuración

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Freelancer Task API is running");
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI)

  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

export default app;
