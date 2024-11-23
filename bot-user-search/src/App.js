import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './UserList';
import SearchBar from './SearchBar';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      axios.get(`/api/users?searchTerm=${searchTerm}`)
        .then(response => {
          setUsers(response.data.result);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setUsers([]);
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Bot User Search</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading ? <p>Loading...</p> : <UserList users={users} />}
    </div>
  );
}

export default App;