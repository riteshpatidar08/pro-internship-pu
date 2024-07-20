import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({allowedRole}) {
    const role = localStorage.getItem('role')
    const token = localStorage.getItem('token')

    if(!token){
      return  <Navigate to='/login' />
    }

    if(!allowedRole.includes(role)){
        return <Navigate to='/login' />
    }

  return <Outlet/>
}

export default PrivateRoute
