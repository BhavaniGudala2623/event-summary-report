import React from 'react';
import { useState } from 'react';
import {  Button, Grid, CssBaseline, AppBar, Toolbar, Typography, Box, TextField } from '@mui/material';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Section } from './Dropdown';

export default function EventSummeryReport() {
  const [currency, setCurrency] = useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar >
            <Box sx={{ width: '100%', maxWidth: 300 }}>

              <Typography variant='h6' gutterBottom component="div"><Home color="black" /><KeyboardArrowRightIcon />Reports</Typography>
              <Typography variant="h6" gutterBottom component="div">Event Summery Report</Typography>
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>
        </Box>
        <Grid container direction="row" justifyContent="center" alignContent="center" >
          <TextField
            id="outlined-select-currency-native"
            select
            required label="Sections:"
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
            {Section.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency-native"
            select
            required label="Sub Station:"
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
          </TextField>

          <TextField
            id="outlined-select-currency-native"
            select
            required label="Feeder:"
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
          </TextField>
          <TextField
            id="outlined-select-currency-native"
            select
            required label="DTR:"
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
          </TextField>

          <TextField id="outlined-basic" label="METER" variant="outlined" />
        </Grid>


       
        <Grid container direction="row" justifyContent="center" alignContent="center" >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" display="inline">
              If you already know the meter number, please enter here :</Typography>
            <TextField />
          </div>
        </Grid>

        <Grid container direction="row" justifyContent="center" alignContent="center" >
          <div component="form" noValidate spacing={3}>
          <Typography variant="h7" display="inline">
              From : </Typography>
              
            <TextField
              id="date"
              label="From "
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </div>
            <div>
            <Typography variant="h7" display="inline">
              To : </Typography>
           
             
            <TextField
              id="date"
              label="To"
              type="date"
              defaultValue="2019-05-09"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </div>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignContent="right" >
  
        <Grid item xs={2} spacing={1} justify="flex-end">
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={() => {
            alert('After submitting data cannot be deleted, would you like to proceed?');
            }}
          >Submit</Button>
          </Grid>
         <Grid item xs={0} spacing={2}>
        <Button
          variant="contained" 
          color="primary" 
          type="clear" 
          onClick={() => {
            alert('After submitting data cannot be deleted, would you like to proceed?');
            }}
          >Clear</Button>
          
          </Grid>
          </Grid>
      </Box>

    </>
  );
}



