import React from 'react';
import clsx from 'clsx';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import UpdateIcon from '@material-ui/icons/Update';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from "react-router-dom";
import { Component } from 'react';

 
import Login from '../components/Login';
import Signup3 from '../components/Signup3';

const drawerWidth = 240;

const useStyles = theme =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });

  class Homedashboard extends Component {
  constructor() {
    super();
    this.state = {
      isDrawerOpened: false,
      st: false,
     sd:false,
    };
  }
  toggleDrawerStatus = () =>
  {
    console.log(this.state.isDrawerOpened)
    this.setState({
      isDrawerOpened: true,
      })
  }
  closeDrawer = () =>
  {
    console.log(this.state.isDrawerOpened)
    this.setState({
      isDrawerOpened: false,
      })
  }
  Sign=()=>{
    alert("Hello");
    this.setState({ st: true });
}
Signup=()=>{
  alert("Hello");
  this.setState({ sd: true });
}
  render()
  {
  const { isDrawerOpened } = this.state;
  const classes = this.props;
  const theme = this.props;
  return (
    <div>
    {this.state.sd ? (<Signup3/>) : (
 
 <div>
   {this.state.st ? (<Login/>) : (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor:"#235567"}}
       
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            name="open"
            className={clsx(classes.menuButton,isDrawerOpened && classes.hide)}
            onClick={this.toggleDrawerStatus}
            edge="start"
           
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap style={{flexGrow:1,fontSize:30}}>
            <Button  color="inherit" style={{fontSize:30}}  >Service X</Button>
          </Typography>
          <Typography variant="h6" noWrap style={{display:'grid',gridColumnGap:20,gridTemplateColumns:"auto auto"}}>
          <Button  variant="contained" size="small" color="primary" onClick={this.Signup}>Signup</Button>
          <Button  variant="contained" size="small" color="primary" onClick={this.Sign}>Login</Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpened}
        onClick={this.closeDrawer}
        classes={{paper:classes.drawerPaper,}}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.closeDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
       
      
        <List>
        {
            <ListItem >
              <ListItemIcon>{< HomeIcon />}</ListItemIcon>
              <lable color="inherit" ><p style={{fontSize:25}} >Dashboard</p></lable>
            <ListItemText />
           </ListItem>
        }
        </List>
      

        <Divider />
        <List>
          {['Workers'].map((text, index) => (
            <ListItem button key={text} component={Link} to="/Customerdashboard" >
              <ListItemIcon>{ <AccountBoxIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {['Update profile'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{ <UpdateIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {['Help & Support'].map((text, index) => (
            <ListItem button key={text} component={Link} to="/Support" >
              <ListItemIcon>{ <HelpOutlineOutlinedIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {['About us'].map((text, index) => (
            <ListItem button key={text} component={Link} to="/About">
              <ListItemIcon>{ <InfoIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
     
      </Drawer>
      <main className={clsx(classes.content, {
          [classes.contentShift]:isDrawerOpened,
        })}  open={isDrawerOpened}
        onClick={this.closeDrawer}
      >
      <div className={classes.drawerHeader} />
   
 
  
       
       
      </main >
    </div>
          )}
   
          </div>
             )}
          </div>
  );
}
}
export default withStyles(useStyles)(Homedashboard);