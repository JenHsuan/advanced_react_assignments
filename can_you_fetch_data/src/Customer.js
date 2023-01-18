import React, {useState, useEffect} from 'react'
import DataFetcher from './DataFetcher';

const Customer = () => {
  const render = () => {
    return <h1>Customer data</h1>
  }

  return (
    <DataFetcher
      url = "https://randomuser.me/api/?results=20"
      render={() =>render()}/>
  )
}

export default Customer