const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Error:", err));

// --- USER SCHEMA (Updated for Roles) ---
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    employeeId: { type: String, required: true, unique: true }, // New Field
    role: { type: String, enum: ['Admin', 'Employee'], default: 'Employee' } // New Field
});
const User = mongoose.model('User', userSchema);

// --- ROUTES ---

// 1. SIGNUP
app.post('/api/signup', async (req, res) => {
    const { username, email, password, employeeId, role } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already exists" });

        // Basic validation
        if (!email.includes('@')) return res.status(400).json({ message: "Invalid Email" });
        if (password.length < 6) return res.status(400).json({ message: "Password too short" });

        const newUser = new User({ username, email, password, employeeId, role });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error: " + error.message });
    }
});

// 2. LOGIN (Role Return karega)
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });
        if (user.password !== password) return res.status(400).json({ message: "Invalid credentials" });

        // Response me Role aur ID bhejo taaki Frontend decide kare kaha jana hai
        res.json({ 
            message: "Login Successful", 
            username: user.username,
            employeeId: user.employeeId,
            role: user.role 
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));