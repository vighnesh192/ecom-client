import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function HomePage() {
  const userState = useSelector(state => state.user);

  useEffect(() => {
    console.log(userState)
  }, [userState]);
  
  return (
    <div id="home-page">
        HOME
    </div>
  )
}

export default HomePage