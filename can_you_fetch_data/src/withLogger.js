import React, { useEffect } from 'react'

const withLogger = (WrappedComponent, props) => {
  useEffect(() => {
    console.log(`${props.role} logged in`);
  }, []);

  return (
    <WrappedComponent {...props}/>
  )
}

export default withLogger
