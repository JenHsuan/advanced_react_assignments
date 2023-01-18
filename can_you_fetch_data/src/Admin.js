import React, {useState, useEffect} from 'react'
import DataFetcher from './DataFetcher';
import withLogger from './withLogger';

const Admin = () => {
  const render = () => {
    return <h1>Admin user data</h1>
  }

  return withLogger(
    DataFetcher, {
      role: "Admin",
      url: "https://randomuser.me/api/?results=5",
      render: render
    }
  )
}

export default Admin
