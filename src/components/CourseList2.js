import React from 'react';
import { Typography, Card, CardMedia, CardContent, Container, Box, Grid, Divider } from '@mui/material';

import picture13 from '../images/Picture13.jpg';
import picture14 from '../images/Picture14.jpg';
import picture15 from '../images/Picture15.jpg';
import picture16 from '../images/Picture16.jpg';
import picture17 from '../images/Picture17.jpg';
import picture18 from '../images/Picture18.jpg';
import picture19 from '../images/Picture19.jpg';



const CourseList2 = () => {
  const PicturesSet1 = [
    { name: 'BBA', image: picture13 },
    { name: 'MBA', image: picture14 },
   
  ];

  const PicturesSet2 = [
    { name: 'B.Tech', image: picture15 },
    { name: 'B.Arch', image: picture16 },
        { name: 'M.Tech', image: picture17 },
        { name: 'BE', image: picture18 },
        { name: 'ME', image: picture19 },
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
        minHeight: '10vh',
        // marginTop: "20px",
        // marginLeft:"20px",
        // marginRight: "20px"
        
      }}
    >
      <Grid >
        <Typography variant="h6" mt={6} mb={1} fontSize={16} textAlign="center" fontWeight="bold" color="rgba(233, 6, 67)">
          Management Courses
          <Divider sx={{ width: '100%', height: '1px', backgroundColor: 'black', opacity: 0.1 }} />
        </Typography>
        {PicturesSet1.map((pic, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'row', mb: 2,minWidth:300, maxWidth: 400, maxHeight: 100, alignItems: 'center' }}>
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
          Engineering Courses
          <Divider sx={{ width: '100%', height: '1px', backgroundColor: 'black', opacity: 0.1 }} />
        </Typography>
        {PicturesSet2.map((pic, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'row', mb: 2, minWidth:300, maxWidth: 400, maxHeight: 100, alignItems: 'center' }}>
              <CardMedia sx={{ width: 80, height: 60 }} cols={3} rowHeight={4} image={pic.image} alt="pic" />
              <CardContent>
              <Typography variant="h6" fontWeight="bold" fontSize={10}>
                  {pic.name}
                  </Typography>
              </CardContent>
            </Card>
            <Divider sx={{ width: '100%', height: '1px', backgroundColor: 'black', opacity: 0.4 }} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default CourseList2;
