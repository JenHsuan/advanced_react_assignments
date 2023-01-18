import React, {useState, useEffect} from 'react'
import DataFetcher from './DataFetcher';
import withLogger from './withLogger';

const User = () => {
  const render = () => {
    return <h1>User data</h1>
  }
    
  return withLogger(
    DataFetcher, {
      role: "User",
      url: "https://randomuser.me/api/?results=20",
      render: render
    }
  )
}

export default User
