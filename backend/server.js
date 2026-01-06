const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ----------------- MongoDB Connection -----------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ----------------- User Schema -----------------
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Employee"],
      default: "Employee",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// ----------------- Routes -----------------

// ✅ Health Check (Render test ke liye)
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully");
});

// ----------------- SIGNUP -----------------
app.post("/api/signup", async (req, res) => {
  const { username, email, password, employeeId, role } = req.body;

  try {
    // Basic validation
    if (!username || !email || !password || !employeeId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Check existing user
    const existingUser = await User.findOne({
      $or: [{ email }, { employeeId }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email or Employee ID already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      employeeId,
      role,
    });

    await newUser.save();

    res.status(201).json({
      message: "✅ User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "❌ Server Error",
      error: error.message,
    });
  }
});

// ----------------- LOGIN -----------------
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "✅ Login Successful",
      username: user.username,
      employeeId: user.employeeId,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({
      message: "❌ Server Error",
      error: error.message,
    });
  }
});

// ----------------- Server Start -----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
