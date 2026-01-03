const express = require("express");
const Attendance = require("../models/Attendance");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// CHECK IN
router.post("/checkin", auth, async (req, res) => {
  const attendance = new Attendance({
    employee: req.user.id,
    checkIn: new Date().toLocaleTimeString()
  });

  await attendance.save();
  res.json({ message: "Check-in successful" });
});

// CHECK OUT
router.post("/checkout", auth, async (req, res) => {
  const attendance = await Attendance.findOne({
    employee: req.user.id
  }).sort({ date: -1 });

  attendance.checkOut = new Date().toLocaleTimeString();
  await attendance.save();

  res.json({ message: "Check-out successful" });
});

// ADMIN - View all attendance
router.get("/", auth, async (req, res) => {
  const records = await Attendance.find().populate("employee", "email role");
  res.json(records);
});

module.exports = router;
