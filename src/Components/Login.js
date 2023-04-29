import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {Card, Box} from '@mui/material';


const Login=(props)=>{

    return(
        <Card  sx={{ maxWidth: '35rem' , margin:'auto', mt:'100px', padding:'20px' }}>
              <Stack
                  component="form"
                  spacing={1}
                  noValidate
                  autoComplete="off"
                  sx={{ margin:'auto',width:'350px'}}  >
              <TextField label="Email" id="fullWidth" />
              <TextField label="Password" id="fullWidth" />
              <Box textAlign='center'>
                  <Button onClick={props.LoginHandler} color="neutral" variant="contained"        
                      sx={{ borderRadius: '16px',width:'100px'}}>
                      Login
                  </Button>
              </Box>
              </Stack>
          </Card>
    )

}

export default Login;