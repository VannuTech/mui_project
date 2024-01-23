import React from 'react';
import { Typography, Card, CardMedia, CardContent, Container, Box, Grid, Divider } from '@mui/material';
import picture7 from '../images/Picture7.jpg';
import picture8 from '../images/Picture8.jpg';
import picture9 from '../images/Picture9.jpg';
import picture10 from '../images/Picture10.jpg';
import picture11 from '../images/Picture11.jpg';
import picture12 from '../images/Picture12.jpg';
import picture13 from '../images/Picture13.jpg';
import picture14 from '../images/Picture14.jpg';

const CourseList1 = () => {
  const PicturesSet1 = [
    { name: 'BCA', image: picture7 },
    { name: 'MCA', image: picture8 },
   
  ];

  const PicturesSet2 = [
    { name: 'BDS', image: picture12 },
    { name: 'MBBS', image: picture13 },
    { name: 'MD/MS', image: picture14 },
  ];

  return (
    <Card
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(182, 215, 235, 0.039)',
        color: 'white',
        justifyContent: 'center',
        minHeight: '100vh',
        marginTop: "20px",
        marginLeft:"20px",
        marginRight: "20px"
        
      }}
    >
      <Grid >
        <Typography variant="h6" mt={6} mb={1} fontSize={16} textAlign="center" fontWeight="bold" color="rgba(233, 6, 67)">
          Computer Courses
          <Divider sx={{ width: '100%', height: '1px', backgroundColor: 'black', opacity: 0.1 }} />
        </Typography>
        {PicturesSet1.map((pic, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'row', mb: 2, maxWidth: 400, maxHeight: 100, alignItems: 'center' }}>
              <CardMedia sx={{ width: 80, height: 60 }} cols={3} rowHeight={4} image={pic.image} alt="pic" />
              <CardContent>
              <Typography variant="h6" fontWeight="bold" fontSize={10}>
                  {pic.name}
                  </Typography>
              </CardContent>
            </Card>
            <Divider sx={{ width: '100%', height: '1px', backgroundColor: 'black', opacity: 0.1 }} />
          </Grid>
        ))}
      </Grid>
      <Grid >
        <Typography variant="h6" mt={6} mb={1} fontSize={16} textAlign="center" fontWeight="bold" color="rgba(233, 6, 67)">
          Medical Courses
          <Divider sx={{ width: '100%', height: '1px', backgroundColor: 'black', opacity: 0.1 }} />
        </Typography>
        {PicturesSet2.map((pic, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'row', mb: 2, maxWidth: 400, maxHeight: 100, alignItems: 'center' }}>
              <CardMedia sx={{ width: 80, height: 60 }} cols={3} rowHeight={4} image={pic.image} alt="pic" />
              <CardContent>
              <Typography variant="h6" fontWeight="bold" fontSize={10}>
                  {pic.name}
                  </Typography>
              </CardContent>
            </Card>
            <Divider sx={{ width: '100%', height: '1px', backgroundColor: 'black', opacity: 0.1 }} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default CourseList1;
