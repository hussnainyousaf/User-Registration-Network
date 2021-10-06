import axios from 'axios'
export const loginUser = async (email,password,referralId) => {
//const body = JSON.stringify(loginUser)
try{
   const { data } = await axios.post('/api/users',{email,password,referralId})
  //console.log(data)
} catch(err) {
    console.warn(err.response.data);
}
}

