# **Role-Based Access Control (RBAC) Application**

A **React.js** application for managing users, roles, and permissions using a role-based access control system. The project features a responsive admin dashboard and dynamic data management with session persistence.

---

## **Features**

### **User Management**
- View a list of all users.
- Add new users with details such as:
  - Name
  - Email
  - Roles (comma-separated)
  - Status (Active/Inactive)
- Edit existing user details.
- Delete users.

### **Role Management**
- View all roles in the system.
- Add new roles with:
  - Role name
  - Permissions (comma-separated)
- Edit existing roles and update their permissions.
- Delete roles.

### **Persistent Data**
- Uses **`sessionStorage`** to store users and roles data.
- Data persists across page refreshes during the browser session.

### **Responsive Design**
- Fully responsive design for seamless usage on desktops, tablets, and mobile devices.

### **Modern UI**
- Interactive modals for adding and editing users or roles.
- Clean and dynamic table views for displaying data.
- Real-time UI updates when data changes.

---

## **Technologies Used**

- **Frontend Framework:** React.js
- **Styling:** CSS Modules
- **Icons:** React Icons
- **Storage:** Session Storage (for temporary persistence)

---

## **Getting Started**
npm install
npm start
http://localhost:3000


## **Project Structure**

rbac-project/
├── public/                # Public assets
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Sidebar.jsx    # Sidebar component
│   │   ├── UserManagement.jsx  # User management component
│   │   ├── RoleManagement.jsx  # Role management component
│   │   ├── Modal.jsx      # Reusable modal component
│   ├── css/               # CSS Modules for styling
│   │   ├── Sidebar.module.css
│   │   ├── UserManagement.module.css
│   │   ├── RoleManagement.module.css
│   │   ├── Modal.module.css
│   ├── pages/             # Page-level components
│   │   ├── Dashboard.jsx  # Main dashboard layout
│   ├── App.jsx            # Root component
│   ├── index.js           # Application entry point
├── package.json           # Project dependencies and scripts


### **Prerequisites**
- **Node.js** (v14+ recommended)
- **npm** or **yarn**


### Key Sections:
- **Project Overview:** Explains the features and purpose of the RBAC system.
- **Technologies Used:** Highlights tools and technologies used in the project.
- **Installation:** Step-by-step guide to set up the project locally.
- **Usage Instructions:** Details how to use the application.
- **Project Structure:** Provides an overview of the folder and file hierarchy.
- **Contribution Guidelines:** Encourages others to contribute.
- **Contact Information:** Provides your contact details for inquiries.

Feel free to update the **GitHub repository link** and other specifics as needed! 🚀

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rbac-project.git
   cd rbac-project
