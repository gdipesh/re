import React from 'react';
import { Typography, Container  } from '@mui/material';
import Button from '@mui/material/Button';
import Myimg from './meImg.jpg';


const Card = () => {
  return (
           <>
                  <Container  maxWidth="sm"  className='card-4 text-center row d-flex align-item-center justify-content-center mx-auto py-5  display-4'  >
                  <Typography variant='h2' className='text-center  display-4'>
                    HELLO
              </Typography>
              <div className=" d-flex align-item-center justify-content-center  mx-auto" >
                    <img src={Myimg} alt=""   className='img-thumbnail img-fluid '/>
              </div>
                  <Typography variant='h3' > I'm Dipesh Gautam </Typography>
                  <Typography variant='h6'> A freelance UI Designer from Nepal</Typography>
                  <Button variant='outlined' maxWidth="sm" color='error'> Hire me</Button>
                  </Container>
             

    
           </>
    );
};

export default Card;
