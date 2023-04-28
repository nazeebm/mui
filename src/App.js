import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { Card, createTheme, Box,AppBar, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


function App() {
  return (
    <div>
      <AppBar postion= 'relative' style={{ padding:'10px'}}>
      <Typography variant='h5'>Login Page</Typography>
      </AppBar>
      <Card  sx={{ maxWidth: '25rem' , margin:'auto', mt:'100px', padding:'20px' }}>
      
      <Stack
      component="form"
      spacing={1}
      noValidate
      autoComplete="off"
      sx={{ margin:'auto',width:'350px'}}
    >
      <TextField label="Email" id="fullWidth" />
      <TextField label="Password" id="fullWidth" />
      <ThemeProvider theme={theme} >
        <Box textAlign='center'>
        <Button color="neutral" variant="contained"        
        sx={{ borderRadius: '16px',width:'100px'}}>
        Login
        </Button>
        </Box>
        </ThemeProvider>  
      
      </Stack>
      

      
        </Card>
        </div>
  );
}

export default App;
