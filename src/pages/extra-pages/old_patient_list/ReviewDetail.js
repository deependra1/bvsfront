import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Nutrition Cost',
    desc: 'A nice thing',
    price: '$9.99'
  },
  {
    name: 'Investigation Cost',
    desc: 'Another thing',
    price: '$3.45'
  },
  {
    name: 'Sugery Cost',
    desc: 'Something else',
    price: '$6.51'
  },
  {
    name: 'Medicine Cost',
    desc: 'Best thing of all',
    price: '$14.11'
  }
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Checked By', detail: 'Dr. Something Nothing' },
  { name: 'Registration number', detail: 'xxxx-xxxx-xxxx-1234' }
];

export default function ReviewDetail() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cost summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Patient
          </Typography>
          <Typography gutterBottom>Ram Krishna</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Other details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
