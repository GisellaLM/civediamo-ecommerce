import React from "react";
// import { Link } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import logo from "../img/gorro.png";
import SideBar from "./SideBar";

import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const useStyles = makeStyles((theme) => ({
  textButton: {
    fontFamily: "Open Sans",
    //color: "#444444",
    color: "#FFF",
  },
  logoImg: {
    height: "63px",
  },
  bars: {
    display: "none",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
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

        <SideBar className={classes.bars}></SideBar>
        <NavMenu>
          <NavLink to="about" smooth={true}>
            ABOUT US
          </NavLink>
          <NavLink to="services" smooth={true}>
            SERVICES
          </NavLink>
          <NavLink to="contact" smooth={true}>
            CONTACT US
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">RESERVATION</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
