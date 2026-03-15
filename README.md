# 🚀 DayFlow HRMS – Modern Workforce Management System

DayFlow HRMS is a modern **Human Resource Management System (HRMS)** designed to simplify employee management, attendance tracking, leave requests, and payroll processing within an organization.

The platform provides **separate dashboards for Admin and Employees**, allowing organizations to manage workforce operations efficiently while employees can track their attendance, apply for leaves, and manage personal information.

The system is built with a **modern UI/UX**, responsive design, and a scalable backend connected to a database for persistent data storage.

---

# 🌐 Live Demo

🔗 https://lovely-kataifi-75a835.netlify.app/

---

# 📂 GitHub Repository

🔗 https://github.com/Vivek-Maheshwari-07/dayflow-hrms

---

# ✨ Key Features

## 🔐 Authentication & Role Management

* Secure Login and Signup system
* Role-based access control (Admin & Employee)
* Protected dashboard access
* Session management using browser storage

---

## 👨‍💼 Admin Panel

The admin dashboard provides full control over workforce management.

**Admin Capabilities**

* View organization statistics
* Add, edit, and remove employees
* Manage employee attendance
* Approve or reject leave applications
* Process employee payroll
* Monitor departments and workforce activity
* Manage admin profile

**Admin Dashboard Includes**

* Total Employees
* Active Employees
* Department Overview
* Attendance Monitoring
* Leave Requests Management
* Payroll Management

---

## 👨‍💻 Employee Panel

Employees can manage their work-related activities from their personal dashboard.

**Employee Features**

* View personal dashboard
* Track attendance history
* Apply for leave requests
* Monitor leave approval status
* View payroll details
* Update profile information
* Edit contact information such as phone and address

---

# 🎨 UI / UX Features

* Dark Mode 🌙 and Light Mode ☀️
* Modern responsive design
* Smooth animations and transitions
* Glassmorphism UI effects
* Clean dashboard layout
* Optimized for desktop usage

---

# 🛠 Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript (ES6)

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## UI Resources

* Remix Icons
* Google Fonts

## Deployment

* Netlify (Frontend Hosting)

---

# 📁 Project Structure

```
dayflow-hrms/
│
├── backend/                     # Backend server
│   ├── server.js                # Express server & API routes
│   ├── package.json             # Backend dependencies
│   └── .env                     # Environment variables
│
├── frontend/                    # Frontend application
│   └── pages/
│       ├── admin/               # Admin dashboard pages
│       ├── employee/            # Employee dashboard pages
│       ├── login.html           # Login page
│       ├── signup.html          # Signup page
│       └── logout.html          # Logout page
│
├── index.html                   # Landing page
└── README.md                    # Project documentation
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```
git clone https://github.com/Vivek-Maheshwari-07/dayflow-hrms.git
```

```
cd dayflow-hrms
```

---

## 2️⃣ Install backend dependencies

Navigate to the backend folder and install required packages.

```
cd backend
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file inside the backend directory and add your database connection string.

Example:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 4️⃣ Run the Backend Server

```
node server.js
```

The backend server will start running locally.

---

# 📸 Application Preview

The application provides two main dashboards:

### Admin Dashboard

* Manage employees
* Track attendance
* Process payroll
* Approve leave requests

### Employee Dashboard

* View attendance history
* Apply for leaves
* Manage profile
* Monitor payroll information

*(You can replace this section with screenshots of your dashboard UI.)*

---

# 🎯 Future Improvements

* Email notifications for leave approval
* Real-time attendance tracking
* Salary slip PDF generation
* Role-based analytics dashboard
* Mobile responsive version
* Multi-company support
* Advanced reporting and analytics

---

# 👨‍💻 Author

**Vivek Maheshwari**
Computer Science Engineering Student
Charotar University of Technology

---

# ⭐ Support

If you find this project useful, consider giving it a **star ⭐ on GitHub**.
It helps others discover the project and supports further development.
