import React, { useEffect, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

function EditUserData() {
    const [userData,setUserData] = useState('');
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate  = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        console.log(location.state);
        setUserData(location.state);
    },[])
    
        let userObj = {
            userName,
            email,
            password,
        }

        const UpdateUser = (id) =>{
            console.log(userObj);
            console.log(id)

            let errArr = [];
        if(!userName){
            errArr.push("Required: Name");
            
        }
        if(!email){
            errArr.push("Required: Email");
            
        }
        if(!password){
            errArr.push("Required: Password");
            
        }
        if(errArr && errArr.length > 0){
            alert(errArr);
            return;
        }

            axios.put("http://localhost:5000/user/"+id,userObj).then((res)=>{
                alert("User Data Update Successfully");
            }).catch((err)=>{
                console.log(err)
            })
        }

        const home = () => {
            navigate("/")

        }
    return (
        <>
            <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection:"column",justifyContent: "center", alignItems: "center",marginTop:10 }}>
            <Typography variant="h4">Existing Data of User</Typography>
              <Box sx={{ width: "90%",border:"2px solid white",borderRadius:"10px" ,backgroundColor: "#1976d2", display: "flex", justifyContent: "center", alignItems: "center",padding:3 }}>
                <Box sx={{border:"2px solid white",padding:1,borderRadius:"10px",marginRight:3}}>
                <Typography sx={{color:"white"}}>User Name</Typography>
                    <Typography variant="h5" sx={{color:"yellow",textDecoration:"underline"}}>{userData.userName}</Typography>
                    </Box>
                <Box sx={{border:"2px solid white",padding:1,borderRadius:"10px",marginRight:3}}>
                <Typography sx={{color:"white"}}>Email</Typography>
                    <Typography variant="h5"sx={{color:"yellow",textDecoration:"underline"}}>{userData.email}</Typography>
                    </Box>
                <Box sx={{border:"2px solid white",padding:1,borderRadius:"10px",marginRight:3}}>
                <Typography sx={{color:"white"}}>Password</Typography>
                    <Typography variant="h5"sx={{color:"yellow",textDecoration:"underline"}}>{userData.password}</Typography>
                    </Box>
                </Box>          
                        <Typography variant="h4" sx={{marginTop:3}}>Update User Data</Typography>

                        
                <Box sx={{ width: "50%", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ padding: 3 }}>

                        <TextField onChange={(e)=> setUserName(e.target.value)} required={true}  id="filled-basic" label="Name"  type="text" variant="filled" sx={{ width: 300 }} />
                    </Box>

                    <Box sx={{ padding: 3 }}>

                        <TextField onChange={(e)=> setEmail(e.target.value)} required={true}  id="filled-basic" label="Email"  type="email" variant="filled" sx={{ width: 300 }} />
                    </Box>

                    <Box sx={{ padding: 3 }}>

                        <TextField onChange={(e)=> setPassword(e.target.value)} required={true}  id="filled-basic" label="Password" type="password"  variant="filled" sx={{ width: 300 }} />
                    </Box>

                    <Box sx={{ padding: 3 }}>
                    <Button variant="contained" onClick={() =>UpdateUser(location.state.email)}><AddBoxIcon/> Update User Data</Button>

                    </Box>
                    <Box sx={{ padding: 3 }}>
                    <Button variant="contained" onClick={home}><TextSnippetIcon/> User Data</Button>

                    </Box>

                </Box>
            </Box>



        </>
    )
}


export default EditUserData;