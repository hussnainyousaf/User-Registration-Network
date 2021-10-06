import { connectToDatabase } from '../../db_helper/mongo_helper';
import {Grid,Paper,} from '@mui/material'
import { IUser } from '../../models/user'
import { IUserNetwork } from '../../models/user_network'
import AppError from '../../lib/appError';
import Error from '../_error';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/users');
  const data = await res.json();
  //console.log(data)

  // map data to an array of path objects with params (id)
  
  const paths = data.map((refuser:IUser) => {
    return {
      params: { id: refuser._id }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  //@ts-ignore
  const id = context.params.id;
  const ress = await fetch('http://localhost:3000/api/users/' + id);
  const data = await ress.json()
  console.log(data)
  

  return {
    props: { refuser: data }
  } 
  
}



const paperStyle={padding:20,height:'10vh',backgroundColor:'', color:"#0072bb"}


const Details = ({ refuser }:{refuser:any}) => {
 //console.log(refuser)
  return (
    <div >
      <Grid>
      <Paper elevation={10} style={paperStyle}>
<h2>Network Tab</h2>
              </Paper>
      </Grid>
    <h2>{refuser.uid.email} network</h2>
    {refuser.chiduid.map((data:IUser)=>(
      <div key={data._id}>
      <> {data.email}</>
      </div>
    )) }
        </div>
  );
}

export default Details;