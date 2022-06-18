import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import UserList from './components/Users/UserList';
import AddUser from './components/Users/AddUser';

const DUMMY_USERS = [
  {id: Math.random(), username: 'Max', age: '99'},
  {id: Math.random() + 1, username: 'Min', age: '1'},
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return ([
        user,
        ...prevUsers
      ]);
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
