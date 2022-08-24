import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "../screens/home";
import PostData from "../screens/postData";


function AppRouting(){

    return(
        <>
        <Router>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/post" element={<PostData/>} />
            </Routes>
        </Router>
        
        </>
    )
}

export default AppRouting;