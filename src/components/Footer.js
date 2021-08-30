import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PlaceIcon from "@material-ui/icons/Place";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import { Grid, ListItem, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import logo from "../img/logo1.png";

import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    margin: theme.spacing(1),
    borderRadius: "30px",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontWeight: "bold",
    textTransform: "none",
  },
  icon: {
    color: "#FF4500",
    [theme.breakpoints.down("md")]: {
      width: "30px",
      height: "30px",
    },
  },
  logoImg: {
    height: "150px",
    width: "306px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      width: "260px",
      height: "133px",
    },
  },
  boxBackgroundFooter: {
    backgroundColor: "#222023",
    //display:"flex"
  },
  boxSocialMedia: {
    /*  textAlign: "center",
    position: "relative",
    bottom: "300px",
    [theme.breakpoints.down("md")]: {
      bottom: "0px",
    }, */
  },
  boxContactData: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "20px",
  },
  textContactData: {
    paddingTop: "8px",
    paddingLeft: "8px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.boxBackgroundFooter}>
        <Grid item xs={5} sm={5} md={4} style={{ textAlign: "center" }}>
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
        </Grid>
        <Grid item xs={1} sm={1} md={4}></Grid>
        <Grid item xs={5} sm={5} md={4}>
          <List className={classes.boxContactData}>
            <ListItem>
              <PlaceIcon className={classes.icon} fontSize="large"></PlaceIcon>
              <Typography className={classes.textContactData}>
                Carrer de Pádua
              </Typography>
            </ListItem>
            <ListItem>
              <PhoneIcon className={classes.icon} fontSize="large"></PhoneIcon>
              <Typography className={classes.textContactData}>
                +99 999 999
              </Typography>
            </ListItem>
            <ListItem>
              <MailOutlineIcon
                className={classes.icon}
                fontSize="large"
              ></MailOutlineIcon>
              <Typography className={classes.textContactData}>
                contact@civediamodomani.it
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
