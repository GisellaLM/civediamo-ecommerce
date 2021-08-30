import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import RandomMap from "../img/map.jpg";
import Button from "@material-ui/core/Button";

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
  boxMap: {
    backgroundImage: `url(${RandomMap})`,
    height: "400px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  boxLogo: {},
  boxSocialMedia: {},
  boxDataCivediamo: {},
  boxForm: {
    // height: "550px",
    width: "478px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFF",
    boxShadow: "0 2px 17px 0 rgba(0,0,0,0.5)",
    position: "relative",
    bottom: "112px",
    padding: "10px 10px 10px 10px",
  },
  boxBackgroundFooter: {
    backgroundColor: "#222023",
    //display:"flex"
  },
  formPosition: {
    //position: "absolute",
  },
  contactUsText: {
    color: "#FF5123",
    fontSize: "72px",
  },
  submit: {
    width: "200px",
    margin: "auto",
    background: "#FF5123",
    color: "#FFF",
    fontWeight: "bold",

    "&:hover": {
      background: "#222023",
    },
  },
  fieldColor: {
    color: "#FF5123",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <>
      <div id="contact">
        <Box className={classes.boxMap}></Box>
        <Grid container className={classes.boxBackgroundFooter}>
          <Grid item md={4} sm={1} xs={1}></Grid>
          <Grid item md={4} sm={10} xs={10}>
            <Grid container alignItems="center">
              <Box className={classes.boxForm}>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.contactUsText} align="center">
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box p={2}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="Name"
                      fullWidth
                      autoComplete="given-name"
                      InputProps={{
                        className: classes.fieldColor,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={2}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="E-mail"
                      fullWidth
                      autoComplete="family-name"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box p={2}>
                    <TextField
                      required
                      id="message1"
                      name="message"
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={10}
                      autoComplete="shipping address-line1"
                    />
                  </Box>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box display="flex" p={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.submit}
                    >
                      Send
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={4} sm={1} xs={1}></Grid>
        </Grid>
      </div>
    </>
  );
}
