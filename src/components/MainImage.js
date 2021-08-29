import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../img/home3.jpg";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Menu from "./Menu";
import logo from "../img/logo1.png";
import Header from "./Header";
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

  divImage: {
    backgroundImage: `url(${Image})`,
    height: "720px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  text: {
    color: "#444444",
    fontFamily: "Open Sans",
  },

  logoImage: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <>
      <div className={classes.divImage}>
        <Grid container justifyContent="flex-end">
          <Grid item md={12} sm={12} xs={12}>
            <Header></Header>
          </Grid>
        </Grid>
        <Grid container className={classes.divGrid}>
          <Grid item md={2} sm={2} xs={2}></Grid>
          <Grid item md={8} sm={8} xs={8}>
            <Box display="flex" mt={20}>
              <Box m={"auto"}>
                <img className={classes.logoImage} src={logo}></img>
              </Box>
            </Box>
          </Grid>
          <Grid item md={2} sm={2} xs={2}></Grid>
        </Grid>
      </div>
    </>
  );
}
