import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function TimelineTab() {
  const [data, setData] = useState(null);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    axios.get('/api/profile/timeline').then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return null;
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div className="flex flex-col flex-1 md:rtl:pl-32">
        <div className='user-info-block'>
          <CardContent className='d-flex'>
            <div className='j-icon'>
              <p className='j-icon-text'>J</p>
            </div>
            <div className='ml-15'>
              <p className='name-style'>
                John
              </p>
              <p>
                (88) 99602-2404
              </p>
            </div>
            <Button variant="contained" className='log-out-btn'>
              <span className='log-out-btn-text'>Log out</span>
            </Button>
          </CardContent>
        </div>
      </div>

      <div className='mtb-10'>
        <Typography
          variant="subtitle1"
          color="inherit"
          className="flex-1 px-12 font-medium alon-text-style"
        >
          Selected service
        </Typography>
      </div>

      <div className="flex flex-col flex-1 md:rtl:pl-32">
        <div className='user-detail-info-block'>
          <CardContent className="p-0 d-flex item-center">
            <Avatar className="mx-4 user-avatar" alt={'adsf'} src="assets/images/avatars/index.svg"/>
            <ListItemText
              className="flex-1 mx-4"
              primary={
                <div>
                  <Typography className="truncate text-style-1" paragraph={false}>
                    Japanese lessons
                  </Typography>

                  <Typography className="truncate text-style-2 d-flex item-center" paragraph={false}>
                    <Icon className='icon-font-size'>calendar_today</Icon> Nov 7, 2020 · 11:30
                  </Typography>

                  <Typography className="truncate text-style-2 d-flex item-center" paragraph={false}>
                    <Icon className='icon-font-size'>place</Icon> Client`s place
                  </Typography>

                  <Typography className="truncate text-style-1" paragraph={false}>
                    Rp 350.000
                  </Typography>
                </div>
              }
            />
          </CardContent>
        </div>
      </div>

      <div className='mtb-10'>
        <Typography
          variant="subtitle1"
          color="inherit"
          className="flex-1 font-medium alon-text-style-1"
        >
          Enter your location
        </Typography>
      </div>

      <input placeholder='Enter address' className='input-style input-font-style'></input>

      <div className='mtb-10'>
        <Typography
          variant="subtitle1"
          color="inherit"
          className="flex-1 font-medium alon-text-style-1"
        >
          Note (optional)
        </Typography>
      </div>

      <input placeholder='Enter text here' className='input-style input-font-style'></input>

      <div className='mtb-10'>
        <Typography
          variant="subtitle1"
          color="inherit"
          className="flex-1 px-12 font-medium alon-text-style"
        >
          Choose a way to pay
        </Typography>
      </div>

      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6} className='p-5'>
            <Button variant="contained" className='log-out-btn width-100 cash-btn'>
              <span className='cash-btn-text'>Cash</span>
            </Button>
          </Grid>
          <Grid item xs={6} className='p-5'>
            <Button variant="contained" className='log-out-btn width-100 credit-btn'>
              <span className='cash-btn-text'>Credit card</span>
            </Button>
          </Grid>
          <Grid item xs={6} className='p-5'>
            <Button variant="contained" className='log-out-btn width-100 credit-btn'>
              <span className='cash-btn-text'>eWallet/<br></br>Virtual bank</span>
            </Button>
          </Grid>
        </Grid>
      </div>

      <div className='mtb-25 d-flex item-center mr-10 ml-10'>
        <FormControlLabel className='mr-0'
          control={<Checkbox checked={false} name="jason" />}
        />
        <Typography
          variant="subtitle1"
          color="inherit"
          className="flex-1 font-medium checkbox-text"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a className='hyper-link'>do eiusmod</a>
        </Typography>
      </div>

      <div className='border-top mtb-10'></div>

      <div className={classes.root}>
        <Grid container>
          <Grid item xs={5} className='p-5'>
            <Typography
              variant="subtitle1"
              color="inherit"
              className="flex-1 font-medium preview-box"
            >
              Previous
            </Typography>
          </Grid>
          <Grid item xs={2} className='p-5'>
          </Grid>
          <Grid item xs={5} className='p-5'>
            <Button variant="contained" className='log-out-btn width-100 next-btn'>
              <span className='next-btn-text'>Next</span>
            </Button>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  );
}

export default TimelineTab;
