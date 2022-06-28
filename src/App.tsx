import React from 'react';
import "./index.scss";
import CssBaseline from '@mui/material/CssBaseline';
import Header from './component/Header';
import Contents from './contents/Contents';

const App = () => {
  return <CssBaseline>
          <Header />
          <Contents />
         </CssBaseline>;
};

export default App;
