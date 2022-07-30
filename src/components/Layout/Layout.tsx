import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className='wrapper'>
        <Header />
        <div className="content">
            <Outlet />
        </div>
        <Sidebar />
    </div>
  )
}

export default Layout