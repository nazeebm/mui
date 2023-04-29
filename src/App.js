
import {AppBar, Typography } from "@mui/material";
import Login from "./Components/Login";
import Theme from "./UI/Themes";
import { useState } from "react";
import Home from "./Components/Home";


  



function App() {
  const [LoginCheck,setLoginCheck]=useState(false)
  const onLoginHandler=()=>{setLoginCheck(true)  }

  console.log(LoginCheck)
  return (
    <div>
      <Theme>
        <AppBar color='primary' postion='relative' style={{ padding: "20px" }}>
          <Typography variant='h5'>My Page</Typography>
        </AppBar>
        {!LoginCheck? <Login LoginHandler={onLoginHandler} />:<Home/>}
      </Theme>
    </div>
  );
}

export default App;
