import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Zoom = require('react-reveal/Zoom')
const Slide = require('react-reveal/Slide')
const Fade  = require('react-reveal/Fade')
const Roll  = require('react-reveal/Roll')

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Contents = () => {
  return (
    <React.Fragment>
      <Container fixed maxWidth='xl'>
       <Slide up>
        <h1> test </h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <Grid container spacing={2}>
         
        <Grid item xs={8}>
        <Zoom>
          <Item>xs=8</Item>
        </Zoom>
        </Grid>
        <Grid item xs={4}>
        <Roll>
          <Item>xs=4</Item>
        </Roll>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
        </Box>
        </Slide>
      <Zoom>
      <h1> test2 </h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Zoom>
      <Fade left>
      <h1> test3 </h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Fade >
      </Container>
    </React.Fragment>
  );
}
export default Contents;