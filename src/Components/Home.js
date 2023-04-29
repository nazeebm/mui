
import {Card} from "@mui/material";
import {AppBar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home=()=>{
    return (
        <div><AppBar color='primary' postion='relative' style={{ padding: "20px" }}>
            <Typography variant='h3'>Website</Typography>
                <div style={{display:'flex',position:'absolute', right:"50px"}}>
                    <Button variant="contained" style={{width:'100px', padding:'10px', marginRight:"10px", borderRadius:'10px'}}><Link to="/Page">My page</Link></Button>
                    <Button variant="contained" style={{width:'100px', padding:'10px', borderRadius:'10px'}}><Link to="/home">Home</Link></Button>
                </div>
            </AppBar>
        <Card  sx={{ maxWidth: '35rem', margin:'auto', mt:'100px', padding:'20px', textAlign:'center' }}>
        <Typography variant="h3" >Welcome Back</Typography>
        <div style={{height:"100px"}}></div>
        <Typography>If you're looking for random paragraphs, you've come to the right place. 
            When a random word or a random sentence isn't quite enough, the next logical step
             is to find a random paragraph. We created the Random Paragraph Generator with you
              in mind. The process is quite simple. Choose the number of random paragraphs 
              you'd like to see and click the button. Your chosen number of paragraphs will 
              instantly appear.
              
              While it may not be obvious to everyone, there are a number of reasons 
              creating random paragraphs can be useful. A few examples of how some people
               use this generator are listed in the following paragraphs.
               </Typography>
               <div style={{height:"100px"}}></div>
               <img
                src='https://images.unsplash.com/photo-1590273466070-40c466b4432d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBmb3Jlc3R8ZW58MHx8MHx8&w=1000&q=80' 
                width="95%" alt="forest img"></img>
            </Card>
            </div>
    )
}
export default Home;