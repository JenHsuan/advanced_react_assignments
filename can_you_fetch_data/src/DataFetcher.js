import React, {useState, useEffect} from 'react'

const DataFetcher = ({url, render}) => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => setUsers(res.results))
  };
    
  useEffect(() => {
    fetchData();
  }, []);

  //return render(users);
  return (
    Object.keys(users).length > 0 ? (
      <div>
        {render(users)}
        <ul>
          {users.map(user => (
            <li key={user.email}>{user.name.first}</li>
          ))}
        </ul>
      </div>
    ) : (
      <h1>Data pending...</h1>
    )
  )
}

export default DataFetcher
