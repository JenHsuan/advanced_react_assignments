import React, {useState, useEffect} from 'react'
import DataFetcher from './DataFetcher';

const User = () => {
  const render = () => {
    return <h1>User data</h1>
  }
    
  return (
    <DataFetcher
      url = "https://randomuser.me/api/?results=10"
      render={() =>render()}/>
  )
}

export default User
