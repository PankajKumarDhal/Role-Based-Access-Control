// import React, { useState } from 'react';
// import Modal from './Modal';
// import { FiEdit, FiTrash } from 'react-icons/fi';
// import { MdAddCircleOutline } from 'react-icons/md';
// import styles from '../css/UserManagement.module.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);

  

//   const handleAddUser = (user) => {
//     if (editingUser) {
//       setUsers(users.map((u) => (u.id === user.id ? user : u)));
//     } else {
//       setUsers([...users, { id: Date.now(), ...user }]);
//     }
//     setShowModal(false);
//     setEditingUser(null);
//   };

//   const handleDeleteUser = (id) => {
//     setUsers(users.filter((u) => u.id !== id));
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.titleSection}>
//         <h2 className={styles.title}>User Management</h2>
//         <button
//           className={styles.addButton}
//           onClick={() => setShowModal(true)}
//         >
//           <MdAddCircleOutline className={styles.addButtonIcon} /> Add User
//         </button>
//       </div>
//       <table className={styles.table}>
//         <thead>
//           <tr className={styles.tableHeader}>
//             <th className="py-3 px-6">Name</th>
//             <th className="py-3 px-6">Email</th>
//             <th className="py-3 px-6">Roles</th>
//             <th className="py-3 px-6">Status</th>
//             <th className="py-3 px-6">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className={styles.tableRow}>
//               <td className={styles.tableData}>{user.name}</td>
//               <td className={styles.tableData}>{user.email}</td>
//               <td className={styles.tableData}>{user.roles.join(', ')}</td>
//               <td className={styles.tableData}>{user.status}</td>
//               <td className={styles.tableData}>
//                 <div className={styles.actionButtons}>
//                   <button
//                     className={`${styles.actionButton} ${styles.editButton}`}
//                     onClick={() => {
//                       setEditingUser(user);
//                       setShowModal(true);
//                     }}
//                   >
//                     <FiEdit />
//                   </button>
//                   <button
//                     className={`${styles.actionButton} ${styles.deleteButton}`}
//                     onClick={() => handleDeleteUser(user.id)}
//                   >
//                     <FiTrash />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {showModal && (
//         <Modal
//           user={editingUser}
//           onSave={handleAddUser}
//           onClose={() => {
//             setShowModal(false);
//             setEditingUser(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default UserManagement;





import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { MdAddCircleOutline } from 'react-icons/md';
import styles from '../css/UserManagement.module.css';

const UserManagement = () => {
  // Load users from sessionStorage or use empty array
  const storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
  const [users, setUsers] = useState(storedUsers);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Save users to sessionStorage whenever the users state changes
  useEffect(() => {
    sessionStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleAddUser = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? user : u)));
    } else {
      setUsers([...users, { id: Date.now(), ...user }]);
    }
    setShowModal(false);
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>User Management</h2>
        <button
          className={styles.addButton}
          onClick={() => setShowModal(true)}
        >
          <MdAddCircleOutline className={styles.addButtonIcon} /> Add User
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Name</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={styles.tableRow}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.roles.join(', ')}</td>
              <td>{user.status}</td>
              <td>
                <div className={styles.actionButtons}>
                  <button
                    className={`${styles.actionButton} ${styles.editButton}`}
                    onClick={() => {
                      setEditingUser(user);
                      setShowModal(true);
                    }}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <FiTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <Modal
          user={editingUser}
          onSave={handleAddUser}
          onClose={() => {
            setShowModal(false);
            setEditingUser(null);
          }}
        />
      )}
    </div>
  );
};

export default UserManagement;

