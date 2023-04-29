
import {Card, Typography} from '@mui/material';



const MyPage=()=>{

    return(
        <Card  sx={{ maxWidth: '35rem' , margin:'auto', mt:'100px', padding:'20px' }}>
              <Typography>my photos</Typography>
              <img alt='forst im' 
              src='https://images.unsplash.com/photo-1590273466070-40c466b4432d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBmb3Jlc3R8ZW58MHx8MHx8&w=1000&q=80'>
              </img>
          </Card>
    )

}

export default MyPage;