import React from 'react';
import {Container, Typography, Button , Grid} from '@material-ui/core';

import useStyles from './styles';

const Cart = ({cart}) => {
           

           const classes = useStyles();
           const EmptyCart =() =>(
               <Typography variant="subtitle">You have no item in your shopping cart</Typography>
           );
           const FilledCart =() => (
               <>
               <Grid container spacing={3}>
                   {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                      
                      </Grid>
                   ))}
               </Grid>
               <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
               </>
           );

    return (
        <Container>
            <div className={classes.toolbar}  />
            <Typography className={classes.title} varaint="h3" gutterBottom>Your shopping cart</Typography>
               {!cart.line_items.length ? <EmptyCart/> : <FilledCart />}
        </Container>
    )
}

export default Cart;
