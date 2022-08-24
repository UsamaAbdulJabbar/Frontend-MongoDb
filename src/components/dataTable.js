import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function DataTable() {
  const [userData, setuserData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/user").then((res)=>{
      console.log(res.data);
      setuserData(res.data);
    })
  },[]);
  console.log("save data",userData)
  let no = 1;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:"bold",fontSize:"1.3rem"}}>S.no</StyledTableCell>
            <StyledTableCell align="center" sx={{fontWeight:"bold",fontSize:"1.3rem"}}>Name</StyledTableCell>
            <StyledTableCell align="center" sx={{fontWeight:"bold",fontSize:"1.3rem"}}>Email</StyledTableCell>
            <StyledTableCell align="center" sx={{fontWeight:"bold",fontSize:"1.3rem"}}>Password</StyledTableCell>
            <StyledTableCell align="center" sx={{fontWeight:"bold",fontSize:"1.3rem"}}>CreatedAt</StyledTableCell>
            <StyledTableCell align="center" sx={{fontWeight:"bold",fontSize:"1.3rem"}}>Edit</StyledTableCell>
            <StyledTableCell align="center" sx={{fontWeight:"bold",fontSize:"1.3rem"}}>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
             {userData.map(e  => 

               <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {no++}
              </StyledTableCell>
              <StyledTableCell align="center"  >{e.userName}</StyledTableCell>
              <StyledTableCell align="center">{e.email}</StyledTableCell>
              <StyledTableCell align="center">{e.password}</StyledTableCell>
              <StyledTableCell align="center">{e.createdAt}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained" sx={{backgroundColor:"yellow",color:"black"}} ><EditIcon/></Button></StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained" sx={{backgroundColor:"red"} } ><DeleteIcon/></Button></StyledTableCell>
              
            </StyledTableRow>
          
        
            )}

        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
