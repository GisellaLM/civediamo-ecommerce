import React from "react";
// import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";
import logo from "../img/gorro.png";
import SideBar from "./SideBar";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  textButton: {
    fontFamily: "Open Sans",
    //color: "#444444",
    color: "#FFF",
  },
  appBarMargin: {
    marginTop: theme.spacing(3),
  },
  logoImg: {
    height: "63px",
  },
  bars: {
    display: "none",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
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

export default function Menu() {
  const classes = useStyles();

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img className={classes.logoImg} src={logo}></img>
        </NavLink>
        {/*  <Bars /> */}
        <SideBar className={classes.bars}></SideBar>
        <NavMenu>
          <NavLink to="about" activeStyle smooth={true}>
            ABOUT US
          </NavLink>
          <NavLink to="services" activeStyle smooth={true}>
            SERVICES
          </NavLink>
          <NavLink to="contact" activeStyle smooth={true}>
            CONTACT US
          </NavLink>
          {/*  <NavLink to="sign-up" activeStyle>
            RESERVATION
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">RESERVATION</NavBtnLink>
        </NavBtn>
      </Nav>
      {/* <div className={classes.grow}>
        <AppBar
          color="transparent"
          position="static"
          className={classes.appBarMargin}
        >
          <Toolbar>
            <div className={classes.grow}>
              <Button className={classes.textButton} color="default">
                Home
              </Button>
              <Button className={classes.textButton} color="inherit">
                ABOUT US
              </Button>
              <Button className={classes.textButton} color="inherit">
                BLOG
              </Button>
              <Button className={classes.textButton} color="inherit">
                MENU
              </Button>
              <Button className={classes.textButton} color="inherit">
                RESERVATION
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div> */}
    </>
  );
}