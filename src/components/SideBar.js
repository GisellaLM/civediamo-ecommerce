import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

import logo from "../img/gorro.png";

import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  logoImg: {
    height: "50px",
  },
  bars: {
    display: "none",
    color: "#fff",
    [theme.breakpoints.between("400", "750")]: {
      display: "block",
      position: "absolute",
      top: "0",
      right: "0",
      transform: "translate(-100%, 75%)",
      fontSize: "1.8rem",
      cursor: "pointer",
    },
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  // const peep = (tamaño, open) => {
  //   const px = (event) => {};
  //   return px;
  // };

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        {["About us", "Services", "Contact us", "Reservation"].map(
          (text, index) => (
            <ListItem button component="a" key={text} to="about">
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      {/*  <Box className={classes.boxSocialMedia}>
        <img className={classes.logoImg} src={logo}></img>
        <Box>
          <IconButton className={classes.icon}>
            <FacebookIcon fontSize="large"></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon
              className={classes.icon}
              fontSize="large"
            ></InstagramIcon>
          </IconButton>
          <IconButton>
            <YouTubeIcon
              className={classes.icon}
              fontSize="large"
            ></YouTubeIcon>
          </IconButton>
          <IconButton>
            <TwitterIcon
              className={classes.icon}
              fontSize="large"
            ></TwitterIcon>
          </IconButton>
        </Box>
      </Box> */}
    </div>
  );
  const anchor = "right";
  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)} className={classes.bars}>
          <MenuIcon></MenuIcon>
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
