import { Link } from 'react-router-dom'
import React from 'react'
import { selectIsauthenticated } from '../redux/slice'
import { useSelector } from 'react-redux'

const Home = () => {
    const isAuthenticated = useSelector(selectIsauthenticated);
    if (!isAuthenticated) {
       alert('Please login before continuing');
        <Link to="/login" />;
    }
    return (
        <div>
            <h2>Home here</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sapiente accusamus nulla debitis? Quaerat sed doloribus voluptatum ab sequi. Reiciendis corporis ratione tempore magnam totam, voluptates doloribus saepe eligendi non?</p>
        </div>
    )
}

export default Home
