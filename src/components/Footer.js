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

import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import logo from "../img/logo1.png";

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
        <Grid item xs={5} sm={5} md={4} style={{ textAlign: "center" }}>
          <Box display="block" justifyContent="center">
            <Box display="inline-flex">
              <PlaceIcon className={classes.icon} fontSize="large"></PlaceIcon>
              <Typography paddingTop="8px">alskdjaklsdj</Typography>
            </Box>
            <Box>
              <Box display="inline-flex">
                <PhoneIcon
                  className={classes.icon}
                  fontSize="large"
                ></PhoneIcon>
                <Typography>+99 999 999</Typography>
              </Box>
            </Box>
            <Box display="inline-flex">
              <MailOutlineIcon
                className={classes.icon}
                fontSize="large"
              ></MailOutlineIcon>
              <Typography>contact@civediamodomani.eu</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
