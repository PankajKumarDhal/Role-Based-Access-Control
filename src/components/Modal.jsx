import React, { useState } from 'react';
import styles from '../css/Modal.module.css'; // Import the CSS Module

const Modal = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState(user || { name: '', email: '', roles: [], permissions: [], status: 'Active' });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRolesChange = (e) => {
    setFormData({ ...formData, roles: e.target.value.split(',') });
  };
  // -----------
  const handlePermissionsChange = (e) => {
    setFormData({ ...formData, permissions: e.target.value.split(',') });
  };
  // '''''''''

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2 className={styles.modalHeader}>{user ? 'Edit User' : 'Add User'}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formData);
          }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={styles.modalInput}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={styles.modalInput}
          />
          <input
            type="text"
            name="roles"
            value={formData.roles.join(', ')}
            onChange={handleRolesChange}
            placeholder="Roles (comma-separated)"
            className={styles.modalInput}
          />
         {/* h---------------  */}
         <input
            type="text"
            name="permissions"
            value={formData.permissions.join(', ')}
            onChange={handlePermissionsChange}
            placeholder="Permissions (comma-separated)"
            className={styles.modalInput}
          />
         {/* ----------- */}
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={styles.modalSelect}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button type="submit" className={styles.modalButton}>
            Save
          </button>
          <button
            type="button"
            className={styles.modalCancel}
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
