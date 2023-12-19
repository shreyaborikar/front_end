import React, { useContext } from 'react'
import { UserContext } from '../App'
import Navbar from './Navbar'
import DetailPage from './DetailPage'

const Details = () => {
 const {isUserAuth, setIsUserAuth}=useContext(UserContext)
  return (

    <Navbar>
    {
        isUserAuth ? (
            <DetailPage/>
        ) : <>You are not authorized</>
    }
    </Navbar>
  )
}

export default Details
