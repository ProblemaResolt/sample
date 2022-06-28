import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Zoom = require('react-reveal/Zoom')

export default function FixedContainer() {
  return (
    <React.Fragment>
      <Zoom>
      <Container fixed maxWidth='xl' sx={{  margin:'0'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
      </Zoom>
    </React.Fragment>
  );
}