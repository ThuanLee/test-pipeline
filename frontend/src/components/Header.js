import React from 'react'
import { useLocation } from 'react-router-dom';
import AddBtn from './AddBtn'

const Header = () => {
  const location = useLocation();


  return (
    <div className='app-header'>
      <div className='app-header-title'><h1>My note</h1></div>
      {(location.pathname === '/') &&
        <AddBtn />
      }
    </div>
  )
}

export default Header