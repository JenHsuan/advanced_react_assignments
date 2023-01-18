import React from 'react'
import DataFetcher from './DataFetcher';
import withLogger from './withLogger';

const Customer = () => {
  const render = () => {
    return <h1>Customer data</h1>
  }

  return withLogger(
    DataFetcher, {
      role: "Customer",
      url: "https://randomuser.me/api/?results=10",
      render: render
    }
  )
}

export default Customer