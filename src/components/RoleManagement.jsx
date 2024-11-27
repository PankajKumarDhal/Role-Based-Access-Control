

import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash } from 'react-icons/fi';
import { MdAddCircleOutline } from 'react-icons/md';
import styles from '../css/RoleManagement.module.css';
import Modal from "./Modal";

const RoleManagement = () => {
  // Load roles from sessionStorage or use empty array
  const storedRoles = JSON.parse(sessionStorage.getItem('roles')) || [];
  const [roles, setRoles] = useState(storedRoles);
  const [showModal, setShowModal] = useState(false);
  const [editingRole, setEditingRole] = useState(null);

  // Save roles to sessionStorage whenever the roles state changes
  useEffect(() => {
    sessionStorage.setItem('roles', JSON.stringify(roles));
  }, [roles]);

  const handleSaveRole = (role) => {
    if (editingRole) {
      // Update existing role
      setRoles((prevRoles) =>
        prevRoles.map((r) => (r.id === editingRole.id ? { ...editingRole, ...role } : r))
      );
    } else {
      // Add new role
      setRoles((prevRoles) => [...prevRoles, { id: Date.now(), ...role }]);
    }
    setShowModal(false);
    setEditingRole(null);
  };

  const handleDeleteRole = (id) => {
    setRoles((prevRoles) => prevRoles.filter((r) => r.id !== id));
  };

  return (
    <div className={styles.roleManagementContainer}>
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>Role Management</h2>
        <button
          className={styles.addRoleButton}
          onClick={() => setShowModal(true)}
        >
          <MdAddCircleOutline className={styles.addButtonIcon} /> Add Role
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permission</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button
                  className={`${styles.actionButton} ${styles.editButton}`}
                  onClick={() => {
                    setEditingRole(role);
                    setShowModal(true);
                  }}
                >
                  <FiEdit />
                </button>
                <button
                  className={`${styles.actionButton} ${styles.deleteButton}`}
                  onClick={() => handleDeleteRole(role.id)}
                >
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <Modal
          role={editingRole}
          onSave={handleSaveRole}
          onClose={() => {
            setShowModal(false);
            setEditingRole(null);
          }}
        />
      )}
    </div>
  );
};

export default RoleManagement;

