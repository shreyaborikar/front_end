// components/Login.js
import React, { useState,useContext } from 'react';
import Navbar from './Navbar';
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../App';


const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const userContext = useContext(UserContext);
  const { setIsUserAuth } = userContext;
  const navigator=useNavigate();
  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
     }
    let response = await fetch("http://localhost:3001/authenticate", { 
    method: "POST",
    body: JSON.stringify({"name": loginData.username,"pass":loginData.password}),
    headers:headersList
});
console.log(loginData);
let data = await response.text();
let res=await JSON.parse(data).success;
console.log(res);
console.log(data);

    if(res){
      setIsUserAuth(loginData.username);
      navigator('/details');

    }
    else{
      alert("This is user is not authorized");
    }
    console.log('Login submitted:', loginData);
    // Add API call or other logic for login

  };

  return (
    <Navbar>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={loginData.username} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={loginData.password} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      </Navbar>
  );
};

export default Login;
