import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BootstrapTable from "../components/bootstrapTable";
import DataTable from "../components/dataTable";
import SearchBar from "../components/searchBar";


function Home() {


    return (
        <>
            <Box sx={{}}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:5}}>
                    <Typography variant="h3">Users Data </Typography>
                </Box>

                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:0}}>
                    <SearchBar/>
                </Box>

                <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100wv",padding:3}}>
                    <DataTable />

                </Box>
            </Box>
        </>
    )
}

export default Home;