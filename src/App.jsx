import React, { useState } from 'react';
import Sidebar from '../src/components/Sidebar';
import UserManagement from '../src/components/UserManagement'; 
import RoleManagement from '../src/components/RoleManagement'; 
import styles from '../src/css/App.module.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Users');

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Dashboard */}
      <div className={styles.dashboard}>
        {/* You can conditionally render content based on activeTab */}
        {activeTab === 'Users' && <UserManagement />}
        {activeTab === 'Roles' && <RoleManagement />}
        {/* Add more conditional rendering for other tabs like 'Roles' if needed */}
      </div>
    </div>
  );
};

export default App;
