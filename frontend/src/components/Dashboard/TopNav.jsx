import React from 'react'
import { logout } from '../../redux/loginSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
function TopNav() {
  const dispatch = useDispatch() ;
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')

    
  }
  return (
    <div className='flex items-center justify-between px-6 h-16 bg-white border-b border-gray-200'>
      <h1 className='text-xl font-semibold'>Welcome Ritesh...</h1>
      <div>
      <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default TopNav
