import {Grid,Paper, TextField} from '@mui/material'
import Button from '@mui/material/Button';
import {loginUser} from '../lib/auth'
import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        referralId: "",
        err:''
    }
 
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const { email , password , referralId} = this.state
        event.preventDefault();
        loginUser(email, password, referralId)
      
    }
   
paperStyle={padding:20,height:'10vh',backgroundColor:'', color:"#0072bb"}
paperStylee={padding:20,height:'70vh', width:350}
stylee={margin:10, padding:6,right:10}
    render() {
        return (
          <Grid >
              <Paper elevation={10} style={this.paperStyle}>
<h2>User Registration Form</h2>
              </Paper>
              <br/>
              <form onSubmit={this.handleSubmit}>
              <Paper elevation={10} style={this.paperStylee}>
<TextField variant="standard" label="Email Id" placeholder="Enter Email" fullWidth name="email" onChange={this.handleChange}></TextField>
<TextField variant="standard" label="Password" placeholder="Enter Password" type="password" fullWidth name="password" onChange={this.handleChange}></TextField>
<TextField variant="standard" label="Referral Id" placeholder="Enter Referral Id Must Be Email" fullWidth name="referralId" onChange={this.handleChange}></TextField>


<Button style={this.stylee} type="submit" color="primary" variant="contained" fullWidth  >Submit Details</Button>

              </Paper>
              </form>
          </Grid>
         
              
     
        )
    }
}
