import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});



function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button variant="contained" >
        Login
        </Button>
        </ThemeProvider>
    </div>
  );
}

export default App;
