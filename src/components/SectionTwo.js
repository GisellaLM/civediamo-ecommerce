import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ImageBackground from "../img/backgroundSection2.jpg";
import data from "../data";
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
    backgroundImage: `url(${ImageBackground})`,
    height: "720px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.up("md")]: {
      height: "720px",
    },
  },
  titleWelcome: {
    color: "#FF5123",
  },
  titleCard: {
    color: "#FF5123",
    fontFamily: "Agency FB",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  cardText: {
    fontFamily: "Open Sans",
    fontSize: "16px",
    color: "#FFF",
  },
  cardSize: {
    width: "210px",
    background: "none",
    boxShadow: "none",
    margin: "auto",
    //marginLeft: "20px",
  },
  cardImg: {
    height: "106px",
    width: "109px",
    margin: "auto",
  },
  boxCards: {
    //display: "inline-flex",
  },
  titleSection: {
    fontFamily: "Open Sans",
    fontSize: "82px",
    color: "#FF5123",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  },
  textServices: {
    color: "#FFF",
    fontSize: "82px",
    fontFamily: "Open Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  },
  textDescription: {
    color: "#FFF",
    fontFamily: "Open Sans",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}));
const keyId = 1;
export default function SectionTwo() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.background} id="services">
        <Grid container>
          <Grid item md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
            <Box mt={15}>
              <Typography display="inline" className={classes.titleSection}>
                Main&nbsp;
              </Typography>
              <Typography display="inline" className={classes.textServices}>
                Services
              </Typography>
            </Box>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography align="center" className={classes.textDescription}>
              Aenean sodales dictum augue, in faucibus nisi sollicitudin eu.
              Nulla semper arcu vel diam auctor. condimentum. Nam molestie sem
              eu quam fermentum a tempus nisi aliquet.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Box mt={5} mb={8}>
              <Grid container>
                {data.map((item, index) => (
                  <Grid
                    item
                    md={3}
                    sm={6}
                    xs={12}
                    key={index}
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                  >
                    <div className={classes.boxCards}>
                      <Card className={classes.cardSize}>
                        <CardMedia
                          className={classes.cardImg}
                          image={item.img}
                        />
                        <CardContent>
                          <Typography className={classes.titleCard}>
                            {item.title}
                          </Typography>
                          <Typography className={classes.cardText}>
                            {item.text}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
