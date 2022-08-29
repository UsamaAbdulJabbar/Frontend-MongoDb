import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
function TodoApp() {
    const [todoData, setTodoData] = useState([]);
    const [showData,setShowData] = useState([]);

    const [mongoData,setMongoData] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:7000/todo").then((res)=>{
            setMongoData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    
    let num = 1; 

    let todoObj = {
        todoData,
    }
    const AddTodo = () => {
        if(todoData==''){
            alert("Invalid Input")
            return;
        }
        console.log(todoData);
        setShowData([...showData,todoData]);

        axios.post("http://localhost:7000/todo",todoObj).then((res)=>{
            console.log(res);
            window.location.reload()
        }).catch((err)=>{
            console.log(err);
        })


        
        
        
    }
    
    const Delete = (item)=>{
        console.log(item)
        axios.delete("http://localhost:7000/todo/"+item).then((res)=>{
            console.log(res);
            
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }

    const DeleteAll=() =>{
        axios.delete("http://localhost:7000/todo").then((res)=>{
            console.log(res);
            
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }


    const edit=(item)=>{
        let todoData = prompt("Enter data");
        const newDataObj = {
            todoData,
        };
        console.log(item);

        axios.put("http://localhost:7000/todo/"+item,newDataObj).then((res)=>{
            console.log(res);
            window.location.reload()
        }).catch((err)=>{
            console.log(err);
        })
    }
    

    return (
        <>
            <Box sx={{ width: "100%", height: "100%", backgroundColor: "white", justifyContent: "center", display: "flex", padding: 10, flexDirection: "column", alignItems: "center" }} >

                <Box sx={{ width: "50%", height: "100%", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 5 }} >
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <TextField onChange={(e) => setTodoData(e.target.value)} id="filled-basic" label="Add Todo" variant="filled" sx={{ width: "300px" }} />
                        <Button onClick={AddTodo} variant="contained"><AddBoxIcon sx={{ width: "40px", height: "40px" }} /></Button>

                        <Button onClick={DeleteAll} variant="contained" sx={{marginLeft:5,backgroundColor:"red"}}>Delete All</Button>
                    </Box>
                </Box>

                {mongoData.map((e) => {
                    return (
                        <>

                    <Box sx={{ width: "50%", height: "100%", backgroundColor: "black  ", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 5, borderRadius: "10px" }} >
                        
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",padding:1 }}>
                            <Box>
                            <Typography variant="h6" sx={{ padding: 3, color: "white" }}>{num++}){e.todoData}</Typography>

                            </Box>
                            <Box>

                            <Button variant="contained" sx={{ backgroundColor: "yellow", merginLeft: 3,color:"black" }}  onClick={()=>edit(e._id)}><EditIcon /></Button>
                            <Button variant="contained" sx={{ backgroundColor: "red", marginLeft: 3 }} onClick={()=> Delete(e._id)}><DeleteForeverIcon /></Button>
                            </Box>
                        </Box>
                    </Box>
                        </>
                    )
                })}
                <>
                </>



            </Box>
        </>
    )
};


export default TodoApp;