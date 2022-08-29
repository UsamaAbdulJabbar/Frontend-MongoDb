import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useNavigate } from "react-router-dom";
function SearchBar(){
        const navigate = useNavigate();

        const postData = () =>{
            navigate("/post");
        }

    return(
        <>
        <TextField id="filled-basic" label="Search" variant="filled" sx={{width:"30%"}}  />
        <Button variant="contained" sx={{height:55,borderRadius:"0px 5px 5px 0px"}} ><SearchIcon/></Button>
        <Button variant="contained" sx={{marginLeft:10}} onClick={postData}  ><AddBoxIcon/>Add New Users</Button>
        <Button variant="contained" sx={{marginLeft:10}}  ><SimCardDownloadIcon/>Download Data</Button>
        
        </>
    )
};


export default SearchBar;