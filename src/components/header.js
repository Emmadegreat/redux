import { NavLink } from 'react-router-dom'
import React from 'react'
import { selectIsauthenticated } from '../redux/slice'
import { useSelector } from 'react-redux'

const Header = () => {

    const isAuthenticated = useSelector(selectIsauthenticated);

    return (
        <div className='bg-blue-700 h-[70px] flex justify-center text-white items-center'>
            <NavLink to='/' className="mx-4" style={{ display:isAuthenticated? "bock":"none"}}>Home</NavLink>
             <NavLink to='/login'>{isAuthenticated ? 'Logout' : 'Login'}</NavLink>
        </div>
    )
}

export default Header
