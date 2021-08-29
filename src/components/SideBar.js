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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  logoImg: {
    height: "50px",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About us", "Services", "Contact us", "Reservation"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <Box className={classes.boxSocialMedia}>
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
      </Box>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {" "}
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
      ))}
    </div>
  );
}
