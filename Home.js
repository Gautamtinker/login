import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  // check if the user is authenticated or not
  if (!sessionStorage.getItem('authenticated')) {
    navigate('/signup'); // redirect to login page if not authenticated
  }

  return (
    <div className='Home_name'>Home</div>
  )
}

export default Home