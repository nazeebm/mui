

import Login from "../Components/Login";
import Theme from "../UI/Themes";
import { useState } from "react";
import Home from "../Components/Home";
import { useEffect } from "react";

const MainBar=()=>{
const [loginCheck,setLoginCheck]=useState(false)
  useEffect(()=>{
                  const loggedInInfo= localStorage.getItem('isLoggedIn');
                  if (loggedInInfo ==='1'){
                                            setLoginCheck(true);
                                          }
                },[]);
console.log(loginCheck)
  const onLoginHandler=()=>{setLoginCheck(true);
  localStorage.setItem('isLoggedIn','1');}

    return(
        <Theme>
            {!loginCheck? <Login LoginHandler={onLoginHandler} />:<Home/>}
        </Theme>
    )
}
export default  MainBar;