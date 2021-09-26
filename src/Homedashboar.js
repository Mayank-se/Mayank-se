import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
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
import { Link } from "react-dom";
// import bootstrap from 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
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
  }),
);


export default function Homedashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let st = true

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function Sign(){
    st = false
    setOpen(st)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor:"#235567"}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap style={{flexGrow:1,fontSize:30}}>
            <Button  color="inherit" style={{fontSize:30}} component={Link} to="/Homedashboard" >Service X</Button>
          </Typography>
          <Typography variant="h6" noWrap style={{display:'grid',gridColumnGap:20,gridTemplateColumns:"auto auto"}}>
          <Button  variant="contained" size="small" color="primary" component={Link} to="/Signup" >Signup</Button>
          <Button  variant="contained" size="small" color="primary" component={Link} to="/Login">Login</Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
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
            <ListItem button key={text} component={Link} to="/About" >
              <ListItemIcon>{ <InfoIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        onClick= {Sign}
      >
      <div className={classes.drawerHeader} />
      
      
      <div className="container">
          <div className="row justify-content-center">
                        <div className="col"><div class="card shadow">
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
              <div class="card-body text-center">
                <h5 class="card-title">Construction</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-success">View more</a>
              </div>
            </div></div>
                        <div className="col"><div class="card shadow">
              <img src="https://picsum.photos/201/300" class="card-img-top" alt="..."height="200px"/>
              <div class="card-body text-center">
                <h5 class="card-title">Maid</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-success">View more</a>
              </div>
            </div></div>
                        <div className="col"><div class="card shadow">
              <img src="https://picsum.photos/202/300" class="card-img-top" alt="..."height="200px"/>
              <div class="card-body text-center">
                <h5 class="card-title">Plumber</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-success">View more</a>
              </div>
            </div></div>
        </div>
       </div>

      </main>
    </div>
  );
}
