import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import HighlightAboutIndia from './components/HighlightAboutIndia';
import CourseList1 from './components/CourseList1';


const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
          },
  },
});

function App() {
  return (
   <ThemeProvider theme={theme}>
        <Container>
           <HighlightAboutIndia />
          
       </Container>
       <Container>
          
          
           <CourseList1/>
       </Container>
   </ThemeProvider>
  );
}

export default App;