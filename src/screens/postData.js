import React, { useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

function PostData() {
    const [userName,setUserName] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const navigate  = useNavigate();
    

    let userDataObj = {
        userName,
        email,
        password,
    }

    const addUser=() =>{
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
        axios.post("http://localhost:5000/user",userDataObj).then((res) =>{
            console.log(res);
            window.location.reload();
            alert("User Add Succesfully");
        })
    }

        const home = () => {
            navigate("/")

        }
    return (
        <>
            <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection:"column",justifyContent: "center", alignItems: "center",marginTop:10 }}>
                        <Typography variant="h4">Add User Data</Typography>
                        
                <Box sx={{ width: "50%", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ padding: 3 }}>

                        <TextField onChange={(e)=> setUserName(e.target.value)} id="filled-basic" label="Name" required={true} type="text" variant="filled" sx={{ width: 300 }} />
                    </Box>

                    <Box sx={{ padding: 3 }}>

                        <TextField onChange={(e)=> setEmail(e.target.value)} id="filled-basic" label="Email" required={true} type="email" variant="filled" sx={{ width: 300 }} />
                    </Box>

                    <Box sx={{ padding: 3 }}>

                        <TextField onChange={(e)=> setPassword(e.target.value)} id="filled-basic" label="Password" type="password" required={true} variant="filled" sx={{ width: 300 }} />
                    </Box>

                    <Box sx={{ padding: 3 }}>
                    <Button variant="contained" onClick={addUser}><AddBoxIcon/> Add User</Button>

                    </Box>
                    <Box sx={{ padding: 3 }}>
                    <Button variant="contained" onClick={home}><TextSnippetIcon/> User Data</Button>

                    </Box>

                </Box>
            </Box>



        </>
    )
}


export default PostData;