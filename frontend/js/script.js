// frontend/js/script.js

// Mock Data for Demo
const MOCK_USER = {
    name: "Aman Gupta",
    role: "employee", // or 'admin'
    email: "aman@dayflow.com"
};

// 1. Check Auth on Load (Run on every page except login)
function checkAuth() {
    const isLoginPage = window.location.pathname.includes('index.html');
    const user = localStorage.getItem('user');

    if (!user && !isLoginPage) {
        window.location.href = 'index.html';
    } else if (user && isLoginPage) {
        window.location.href = 'dashboard.html';
    }
}

// 2. Render Sidebar (So we don't copy-paste HTML in every file)
function renderSidebar(activePage) {
    const sidebarContainer = document.getElementById('sidebar-container');
    if (!sidebarContainer) return;

    const user = JSON.parse(localStorage.getItem('user')) || MOCK_USER;

    const menuItems = [
        { name: 'Dashboard', icon: 'squares-four', link: 'dashboard.html', id: 'dashboard' },
        { name: 'My Profile', icon: 'user', link: 'profile.html', id: 'profile' },
        { name: 'Attendance', icon: 'clock', link: 'attendance.html', id: 'attendance' },
        { name: 'Leave Mgmt', icon: 'calendar-minus', link: 'leaves.html', id: 'leaves' },
        { name: 'Payroll', icon: 'money', link: 'payroll.html', id: 'payroll' },
    ];

    const navLinksHTML = menuItems.map(item => `
        <li class="nav-item">
            <a href="${item.link}" class="nav-link ${activePage === item.id ? 'active' : ''}">
                <i class="ph ph-${item.icon}"></i> ${item.name}
            </a>
        </li>
    `).join('');

    sidebarContainer.innerHTML = `
        <div class="sidebar">
            <div class="brand">
                <i class="ph ph-flower-lotus"></i> Dayflow
            </div>
            <ul class="nav-links">
                ${navLinksHTML}
            </ul>
            <div class="user-profile-mini">
                <div class="avatar-circle">${user.name.charAt(0)}</div>
                <div>
                    <div style="font-weight: 600; font-size: 0.9rem;">${user.name}</div>
                    <div style="font-size: 0.75rem; color: #64748b;">${user.role.toUpperCase()}</div>
                </div>
                <i class="ph ph-sign-out" style="margin-left: auto; cursor: pointer; color: #ef4444;" onclick="logout()"></i>
            </div>
        </div>
    `;
}

// 3. Login Function
function login(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@dayflow.com' && password === 'admin') {
        localStorage.setItem('user', JSON.stringify({ ...MOCK_USER, name: 'Admin User', role: 'admin' }));
        window.location.href = 'dashboard.html';
    } else if (email === 'emp@dayflow.com' && password === 'emp') {
        localStorage.setItem('user', JSON.stringify({ ...MOCK_USER, name: 'Rahul Sharma', role: 'employee' }));
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid Credentials! Try: admin@dayflow.com / admin');
    }
}

// 4. Logout Function
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    // Body ID should match the page name for active state
    const pageId = document.body.id; 
    if (pageId) renderSidebar(pageId);
});