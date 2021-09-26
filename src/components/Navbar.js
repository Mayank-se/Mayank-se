import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import UpdateIcon from '@material-ui/icons/Update';
import HomeIcon from '@material-ui/icons/Home';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { Button} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LoginUI from '../page/LoginUI';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

 class PermanentDrawerLeft extends Component {
  constructor() {
    super();
    this.state = {
        st: false,
     
    };
}
Sign=()=>{
    alert("Hello");
    this.setState({ st: true });
}
  render(){
  const classes = this.props;

  return (
    <div>
    {this.state.st ? (<LoginUI/>) : (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="secondary" style={{height:88,backgroundColor:"#235567"}}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{flexGrow:1,marginLeft:222}}>
            Service X
          </Typography >
          <div style={{ width: 400}} >
          <Typography noWrap>
          <List>
          {
            <ListItem >
              <ListItemIcon>{<  SearchIcon />}</ListItemIcon>
              <TextField  color="inherit" label="Search Worker" margin="normal" variant="outlined" />
            <ListItemText />
           </ListItem>
          }
        </List>
         </Typography>
          </div>
          <Typography variant="h6" noWrap >
          <Button  color="inherit" component={Link} to="/Feedback">Home</Button>
          <Button  color="inherit"  component={Link} to="/Contact">Contact Us</Button>
          <Button  color="inherit"  component={Link} to="/About">About</Button>
          <Button  color="inherit"   onClick={this.Sign}   component={Link} to="/Login" style={{display:"contents"}}>Login</Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer  
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
       
        <List>
          {
            <ListItem >
              <ListItemIcon>{< HomeIcon />}</ListItemIcon>
              <lable color="inherit" component={Link} to="/About"><p style={{fontSize:25}}>Dashboard</p></lable>
            <ListItemText />
           </ListItem>
          
          }
        </List>
        <List>
          {['Customer Profile'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>{<AccountBoxIcon/>}</ListItemIcon>
              <Button  color="inherit" component={Link} to="/Feedback"><p style={{fontSize:12}}>Worker Profile</p></Button>
            <ListItemText />
           </ListItem>
          
          )) }
        </List>
        <List>
          {['Update Profile'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>{<UpdateIcon  />}</ListItemIcon>
              <Button  color="inherit" component={Link} to="/Contact"><p style={{fontSize:12}}>Order view</p></Button>
            <ListItemText />
           </ListItem>
          
          ))}
        </List>
       
        <List>
          {['Oder comformation'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{ <FeedbackOutlinedIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {['Help & Support'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{ <HelpOutlineOutlinedIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {['Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{ <ExitToAppOutlinedIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </Drawer>
    </div>
    )}
    </div>
  );
}
}
export default withStyles(useStyles)( PermanentDrawerLeft);


