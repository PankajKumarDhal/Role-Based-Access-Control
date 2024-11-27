// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import UserManagement from '../components/UserManagement';
// import RoleManagement from '../components/RoleManagement';
// import styles from '../css/dashboard.module.css'; // Import the external CSS file

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('Users');

//   const renderTab = () => {
//     switch (activeTab) {
//       case 'Users':
//         return <UserManagement />;
//       case 'Roles':
//         return <RoleManagement />;
//       default:
//         return <UserManagement />;
//     }
//   };

//   return (
//     <div className={styles.flex}>
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <div className={styles.flex1}>
//         <h1 className={styles.flex}>
//           Admin Dashboard - {activeTab}
//         </h1>
//         {renderTab()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import UserManagement from '../components/UserManagement';
import RoleManagement from '../components/RoleManagement';
import styles from '../css/dashboard.module.css'; // Import the external CSS file

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Users');

  // Load the last active tab from localStorage on component mount
  useEffect(() => {
    const storedTab = localStorage.getItem('activeTab');
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  // Save the active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const renderTab = () => {
    switch (activeTab) {
      case 'Users':
        return <UserManagement />;
      case 'Roles':
        return <RoleManagement />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className={styles.flex}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.flex1}>
        <h1 className={styles.flex}>
          Admin Dashboard - {activeTab}
        </h1>
        {renderTab()}
      </div>
    </div>
  );
};

export default Dashboard;
