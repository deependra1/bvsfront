import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from 'assets/images/users/avatar-group.png';

export default function PatientCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ALiza Gautam
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Donate</Button>
        <Button size="small">Cost</Button>
        <Button size="small">Edit</Button>
        <Button size="small">Del</Button>
      </CardActions>
    </Card>
  );
}
