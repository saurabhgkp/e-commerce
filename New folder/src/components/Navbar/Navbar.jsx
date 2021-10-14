import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = ( {totalItems}) => {
    const classes= useStyles();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography  variant="h6" className={classes.title} color="inherit">
            <img  alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
          </Typography>
          <div className={classes.grow} />
         
          <div className={classes.button}>
            <IconButton  aria-label="Show cart items" color="inherit">
              <Badge  color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          
        </Toolbar>
      </AppBar>    
        </>
    )
}

export default Navbar;
