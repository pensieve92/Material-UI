import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import { Box, Container, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';



function App() {
  return (
   <Grid container direction="column">
     <Grid item>
       <Header />
     </Grid>
     <Grid item container>
        <Grid item xs={false} sm={2}/>        
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>        
        <Grid item xs={false} sm={2}> </Grid>
      </Grid>
   </Grid>
    

  );
}

export default App;
