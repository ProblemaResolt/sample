import React from 'react';
import "./index.scss";
import CssBaseline from '@mui/material/CssBaseline';
import ScrollMotion from './component/ScrollMotion';
import Header from './component/Header';

const App = () => {
  return <CssBaseline>
          <Header />
          <ScrollMotion />
         </CssBaseline>;
};

export default App;
