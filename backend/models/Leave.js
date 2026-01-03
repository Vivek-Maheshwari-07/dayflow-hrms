const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  type: String,
  from: Date,
  to: Date,
  reason: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Leave", leaveSchema);
