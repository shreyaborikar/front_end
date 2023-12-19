import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import { UserContext } from '../App';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom';
const Navbar = ({children}) => {

  
  const userContext = useContext(UserContext);
  const { isUserAuth,setIsUserAuth } = userContext;
  const navigator=useNavigate();
  const logoutUser = () =>{
    setIsUserAuth(null);
    navigator('/login');
  }

  return (
    <>
    <nav>
          <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <li><NavLink to="/registration" activeClassName="active">Registration</NavLink></li>
            {isUserAuth ==null ? (<li><NavLink to="/login" activeClassName="active">Login</NavLink></li>) : (
              <li><button onClick={logoutUser}>Logout</button></li>
            )}
            
          </ul>
        </nav> 
    {children}
    </>
  )
}

export default Navbar
