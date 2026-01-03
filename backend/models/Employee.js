const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    employeeId: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    role: { type: String, default: 'Employee' },
    status: { type: String, default: 'Active' },
    dateJoined: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);