import React from 'react'
import { Typography,Card,CardMedia,CardContent, Container,Box, Grid } from '@mui/material';
import picture1 from '../images/Picture1.png';
import picture2 from '../images/Picture2.png';
import picture3 from '../images/Picture3.png';
import picture4 from '../images/Picture4.png';
import picture5 from '../images/Picture5.png';
import picture6 from '../images/Picture6.png';
const CakeSection = () => {

    const cakes = [
        {name:"Name", description: "Republic of India", image: picture1},
        {name:"Capital", description: "Delhi",image:picture2},
        {name:"Language", description: "Hindi, English and many regional language",image:picture3},
        {name:"Religion", description: "Hinduism, Islamic, Christianity, Others",image:picture4},
        {name:"Population", description: "163.64 Crores(2019)",image:picture5 },
        {name:"Currency", description: "Indian Rupee",image:picture6},
      ]

      
    return (
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  backgroundColor: 'rgb(50, 50, 50)', color: 'white', justifyContent: 'center', minHeight: '100vh' }}>
        <Grid container spacing={2}>
        <Box sx={{  width: '100%', pb: 1, mb: 3, textAlign: 'center', boxShadow: "0 -10px 7px -7px grey inset"  }}>
        <Typography variant="h6" mt={6} mb={1}  fontSize={24} fontWeight="bold">
          HighLights About India
        </Typography>
      </Box>
          {cakes.map((cake, index) => (
            <Grid item xs={12} sm={6} key={index} >
              <Card sx={{ display: 'flex', flexDirection: 'row', mb: 2, maxWidth: 400,  maxHeight: 100 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {cake.name}
                  </Typography>
                  <Typography variant="body2" fontSize={14}>
                    {cake.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  sx={{ width: 120, height: 120, margin: '0 20px 0 0', marginLeft: 'auto' }}
                  cols={3}
                  rowHeight={4}
                  image={cake.image}
                  alt="cake"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}

export default CakeSection