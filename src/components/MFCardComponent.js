import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@material-ui/core'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MFCard({fund_house,scheme_type,scheme_category,scheme_code}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {scheme_code}
        </Typography>
        <Typography variant="h5" component="div">
          {fund_house}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {scheme_category}
        </Typography>
        <Typography variant="body2">
          {scheme_type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 235,
    width: 320,
    height: 200,
    margin: '0.75rem',
    padding: '1rem',
    display: 'inline-block'
  },
});