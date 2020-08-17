import React from 'react'
import Grid from '@material-ui/core/Grid'
import doggo from '../../assets/doggo.jpg'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Header = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={5} alignItems={'center'}>
      <Grid item xs={6} sm={6}>
        <img className={classes.image} src={doggo}/>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Typography variant={'h4'}>Hi! I'm Prateek Vijayvergiya</Typography>
        <Typography variant={'h5'} color={'textPrimary'}>Software Engineer</Typography>
      </Grid>
    </Grid>
  ) 
}

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '100%'
  },
  root: {
    backgroundColor: '#fffde7',
    padding: '64px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px'
    }
  }
})) 

export default Header