import React from "react";
import { FaUsers, FaShieldAlt } from "react-icons/fa"; // Adding icons for Users and Roles
import styles from '../css/Sidebar.module.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: "Users", icon: <FaUsers className={styles.tabIcon} /> },
    { name: "Roles", icon: <FaShieldAlt className={styles.tabIcon} /> },
  ];

  return (
    <div className={styles.sidebarContainer}>
      <h2 className={styles.sidebarTitle}>RBAC Admin Panel</h2>
      <ul className={styles.tabsList}>
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className={`${styles.tabItem} ${activeTab === tab.name ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.icon}
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
