import { NavLink } from 'react-router-dom'
import React from 'react'
import { selectIsauthenticated } from '../redux/slice'
import { useSelector } from 'react-redux'

const Header = () => {

    const isAuthenticated = useSelector(selectIsauthenticated);

    return (
        <div className='bg-blue-700 h-[70px] flex justify-center text-white items-center'>

                <div>
                    <NavLink to='/' className="mx-4"> Home</NavLink>

                </div>

            {isAuthenticated ? (<NavLink to='/profile' className="mx-4">profile</NavLink>) :(<NavLink to='/login' className="mx-4">login</NavLink>)}
        </div>
    )
}

export default Header
