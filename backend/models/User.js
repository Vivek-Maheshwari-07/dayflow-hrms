const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["Employee", "Admin"],
    default: "Employee"
  },
  name: String,
  phone: String,
  address: String,
  salary: Number
});

module.exports = mongoose.model("User", userSchema);
