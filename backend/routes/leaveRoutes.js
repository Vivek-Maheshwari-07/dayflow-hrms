const express = require("express");
const Leave = require("../models/Leave");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// APPLY LEAVE
router.post("/apply", auth, async (req, res) => {
  const leave = new Leave({
    employee: req.user.id,
    ...req.body
  });

  await leave.save();
  res.json({ message: "Leave applied" });
});

// ADMIN - View all leaves
router.get("/", auth, async (req, res) => {
  const leaves = await Leave.find().populate("employee", "email");
  res.json(leaves);
});

// ADMIN - Approve / Reject
router.put("/:id", auth, async (req, res) => {
  await Leave.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  });
  res.json({ message: "Leave updated" });
});

module.exports = router;
