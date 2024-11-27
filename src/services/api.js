const mockData = {
    users: [],
    roles: [],
  };
  
  export const getUsers = () => Promise.resolve(mockData.users);
  
  export const addUser = (user) => {
    mockData.users.push(user);
    return Promise.resolve(user);
  };
  
  export const editUser = (updatedUser) => {
    const index = mockData.users.findIndex((user) => user.id === updatedUser.id);
    if (index > -1) {
      mockData.users[index] = updatedUser;
      return Promise.resolve(updatedUser);
    }
    return Promise.reject('User not found');
  };
  
  export const deleteUser = (id) => {
    mockData.users = mockData.users.filter((user) => user.id !== id);
    return Promise.resolve();
  };
  