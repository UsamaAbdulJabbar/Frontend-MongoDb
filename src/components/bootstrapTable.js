import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function BootstrapTable(){
     const [userData, setUserData] = useState([]);
    // useEffect(()=>{
    //         axios.get("http://localhost:5000/user").then((res) => {
    //             console.log(res.data)
    //             setUserData(res.data);
                
    //         })
    // },[])
    
    const DeleteData = ()=>{
        console.log(userData);
    }

    return(
        <>
        <Box>
            <Box>
                <div>
                <table class="table table-dark  table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">CreatedAt</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
    {userData.map((e,i) => {
            <tr >
            <th scope="row">1</th>
            <td>{e.userName}</td>
            <td>smcscc</td>
            <td>sc;scscl;s</td>
            <td>cmskclmsklc</td>
            <td><Button variant="contained" ><EditIcon/> Edit</Button></td>
            <td><Button variant="contained" sx={{backgroundColor:"red"} } onClick={DeleteData}><DeleteIcon/>Delete</Button></td>
        </tr>
        })}
        

    {/* <tr>
      <th scope="row">1</th>
      <td>usama</td>
      <td>smcscc</td>
      <td>sc;scscl;s</td>
      <td>cmskclmsklc</td>
      <td><Button variant="contained" ><EditIcon/> Edit</Button></td>
      <td><Button variant="contained" sx={{backgroundColor:"red"} } onClick={DeleteData}><DeleteIcon/>Delete</Button></td>
    </tr> */}
        
        
    

    
        
  </tbody>
</table>
                </div>
            </Box>
        </Box>
        
        </>
    )
}


export default BootstrapTable;