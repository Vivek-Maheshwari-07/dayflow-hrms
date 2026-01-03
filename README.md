# 🚀 HRMS.App - Modern Workforce Management System

A comprehensive **Human Resource Management System (HRMS)** built to streamline employee management, attendance tracking, leave requests, and payroll processing. The system features a responsive UI with **Dark/Light mode**, role-based access control (**Admin & Employee**), and a robust backend connected to **MongoDB**.

![Project Banner](https://via.placeholder.com/1000x400?text=HRMS+Dashboard+Preview) 
*(Replace this link with your actual dashboard screenshot)*

---

## ✨ Key Features

### 🔐 Authentication & Security
* **Role-Based Access Control (RBAC):** Separate dashboards for Admins and Employees.
* **Secure Login/Signup:** Connected to MongoDB for persistent user data.
* **Session Management:** Uses LocalStorage to maintain user sessions securely.

### 👨‍💼 Admin Panel
* **Dashboard:** Real-time stats (Total Employees, Active Now, Departments).
* **Employee Management:** Add, Edit, and Delete employee records.
* **Attendance Tracker:** Mark attendance (Present/Absent/Late) for all employees.
* **Leave Management:** Approve or Reject leave requests with status updates.
* **Payroll System:** Calculate base salary, bonuses, and deductions to generate net pay.
* **Profile:** Manage admin details.

### 👨‍💻 Employee Panel
* **Personal Dashboard:** Quick access to attendance and leave stats.
* **Attendance History:** View daily attendance status marked by Admin.
* **Leave Application:** Apply for Sick, Casual, or Unpaid leaves.
* **My Profile:** View details and edit contact information (Phone/Address).

### 🎨 UI/UX
* **Theme Toggle:** Fully functional **Dark Mode 🌙** and **Light Mode ☀️**.
* **Responsive Design:** Works seamlessly on Desktop and Tablets.
* **Modern Interface:** Glassmorphism effects, animated backgrounds, and smooth transitions.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Custom Variables), JavaScript (ES6+).
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB.
* **Icons:** Remix Icons.
* **Fonts:** Inter, Plus Jakarta Sans.

---

## 📂 Project Structure

```bash
HRMS-Project/
│
├── backend/                # Server Side Code
│   ├── server.js           # Express App & API Routes
│   ├── package.json        # Backend Dependencies
│   └── .env                # Environment Variables (Mongo URI)
│
├── frontend/               # Client Side Code
│   └── pages/
│       ├── admin/          # Admin Pages (Dashboard, Employees, etc.)
│       ├── employee/       # Employee Pages (Dashboard, Profile, etc.)
│       ├── login.html      # Login Page
│       ├── signup.html     # Signup Page
│       └── logout.html     # Logout Page
│
├── index.html              # Landing Page (Entry Point)
└── README.md               # Project Documentation