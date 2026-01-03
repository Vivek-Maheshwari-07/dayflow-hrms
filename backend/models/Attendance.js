const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  },
  checkIn: String,
  checkOut: String,
  status: {
    type: String,
    enum: ["Present", "Half Day", "Absent"],
    default: "Present"
  }
});

module.exports = mongoose.model("Attendance", attendanceSchema);
