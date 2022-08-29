import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import EditUserData from "../screens/editUser";
import Home from "../screens/home";
import PostData from "../screens/postData";
import TodoApp from "../screens/todo";


function AppRouting(){

    return(
        <>
        <Router>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/post" element={<PostData/>} />
                <Route path="/editUser" element={<EditUserData/>} />
                <Route path="/todo" element={<TodoApp/>} />
            </Routes>
        </Router>
        
        </>
    )
}

export default AppRouting;