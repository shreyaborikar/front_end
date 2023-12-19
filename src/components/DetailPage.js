import React from 'react'
import { UserContext } from '../App';
import { useContext,useState } from 'react';

const DetailPage = () => {
  const [user,setUser] = useState({});
  const userContext = useContext(UserContext);
  const { isUserAuth } = userContext;
  const getUserDetails = async () =>{
       let response = await fetch("http://localhost:3001/getUser?name="+isUserAuth);
       let data = await response.json();
       if(data)setUser(data);
       
  }
  getUserDetails();
  return (
    <div>
      {/* detailspage */}
      <br/>
      Username:{user.name} <br/> <br/>
      Batch:{user.batch}  <br/> <br/>
      Fee Payment: Done{user.fee_details}
    </div>
  )
}

export default DetailPage
