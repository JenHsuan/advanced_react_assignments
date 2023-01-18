import React, {useState, useEffect} from 'react'

const Admin = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(res => setUsers(res.results))
  };
    
  useEffect(() => {
    fetchData();
  }, []);
    
  return Object.keys(users).length > 0 ? (
    <div>
      <h1>Admin user data</h1>
      <ul>
        {users.map(user => (
          <li key={user.email}>{user.name.first}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default Admin
