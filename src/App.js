
import {AppBar, Typography } from "@mui/material";
import Login from "./Components/Login";
import Theme from "./UI/Themes";
import { useState } from "react";
import Home from "./Components/Home";
import { useEffect } from "react";
import Button from '@mui/material/Button';

function App() {

  const [LoginCheck,setLoginCheck]=useState(false)
  useEffect(()=>{
                  const loggedInInfo= localStorage.getItem('isLoggedIn');
                  if (loggedInInfo ==='1'){
                                            setLoginCheck(true);
                                          }
                },[]);

  const onLoginHandler=()=>{setLoginCheck(true);
  localStorage.setItem('isLoggedIn','1');}

  return (
    <div>
      <Theme>
        <AppBar color='primary' postion='relative' style={{ padding: "20px" }}>
          <Typography variant='h5'>My Page</Typography>
          <div style={{display:'flex',position:'absolute', right:"50px"}}>
          <Button variant="contained" style={{width:'100px', padding:'10px', marginRight:"10px", borderRadius:'10px'}}>MyPage</Button>
          <Button variant="contained" style={{width:'100px', padding:'10px', borderRadius:'10px'}}>MyPage</Button>
          </div>
          
        </AppBar>
        {!LoginCheck? <Login LoginHandler={onLoginHandler} />:<Home/>}
      </Theme>
    </div>
  );
}

export default App;
