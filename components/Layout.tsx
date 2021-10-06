import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { IUser } from '../models/user'
import Link from 'next/link'
import { Button } from '@mui/material'

export const Layout = () => {

    const [users, setUsers] = useState([])

    const getUsers = () => {
    axios.get("/api/users").then((response) => {
     // console.log(response.data)
      setUsers(response.data)
        })
    }
   const stylee={backgroundColor:'' , width:350, marginLeft:500, marginTop:-530}
    return (
        
     
        <div style={stylee} className="">
          <Button variant="outlined" onClick={getUsers}>Registered User</Button>
          {users.map((user:IUser) =>(
              
              <div key={user._id}>
              <Link href={'/user/' + user._id} key={user._id} passHref> 
        
              {user.email}
              
              </Link>
              </div>
              
          ))}

     
            
        </div>
        
    )
}