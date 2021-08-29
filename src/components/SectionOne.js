import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChefHat from "../img/gorro.png";
import Polaroid1 from "../img/polaroid_1.jpg";
import Polaroid2 from "../img/polaroid_2.jpg";
import Firma from "../img/firma1.png";
import Box from "@material-ui/core/Box";

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
  background: {
    backgroundColor: "#FFF4E4",
    height: "720px",
    width: "100%",
  },
  titleWelcome: {
    color: "#FF5123",
    fontSize: "72px",
  },
  gorroImg: {
    backgroundImage: `url(${ChefHat})`,
    height: "50px",
    width: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  stylePharase: {
    color: "#73848E",
    fontSize: 24,
    fontFamily: "Open Sans",
    fontStyle: "italic",
  },
  rotatePolaroidLeft: {
    transform: "rotate(351deg)",
    height: "380px",
    width: "320px",
    position: "relative",
    top: "100px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      height: "320px",
      width: "265px",
    },
    //right:"170px"
  },

  rotatePolaroidRight: {
    transform: "rotate(379deg)",
    height: "280px",
    width: "235px",
    position: "relative",
    top: "285px",
    right: "140px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  chefSign: {
    height: "300px",
  },
}));

export default function SectionTwo() {
  const classes = useStyles();
  return (
    <>
      <section>
        <Grid container className={classes.background} id="about">
          <Grid item xl={6} lg={6} md={6} xs={12} sm={12}>
            <Grid container>
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
              <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <Box mt={15}>
                  <Typography className={classes.titleWelcome} align="center">
                    Welcome!
                  </Typography>

                  <Typography className={classes.stylePharase}>
                    A wonderful serenity has taken possession of my entire
                    soul,like there sweet mornings of spring which I enjoy with
                    my whole heart.
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                  <img className={classes.chefSign} src={Firma}></img>
                </Box>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} xs={12} sm={12}>
            <Box display="flex" justifyContent="center">
              <img className={classes.rotatePolaroidLeft} src={Polaroid1}></img>
              <img
                className={classes.rotatePolaroidRight}
                src={Polaroid2}
              ></img>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
