import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { signOutUser } from '../config/firebase/firebasemethods'

const Navbar = () => {

  // useNavigate
  const navigate = useNavigate()

  const logoutUser = async () => {
    const user = await signOutUser();
    setIsUser(false)
    console.log(user);
    navigate('login')
  }
  return (
    <>
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px"
    }}>
    
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
      <Link to="profile">Profile</Link>
      <Link to="dashboard">Dashboard</Link>
      {/* <Link to="logout">Logout</Link> */}
      
      
    </div>
    </>
  )
}

export default Navbar