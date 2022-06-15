import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Contents = () => {
  return (<>
<Container maxWidth="xl">
  <h2>title</h2>
  <Box maxWidth="xl" sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
</Container>
</>)
};

export default Contents;