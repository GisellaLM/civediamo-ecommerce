import React from "react";
import Menu from "./Menu";
import MainImage from "./MainImage";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  bNowBrowse: {
    color: "#FFFFFF",
    backgroundColor: "#B1BF9D",
  },
  bWatchVideo: {
    color: "#B1BF9D",
    borderColor: "#B1BF9D",
  },
  divImage: {
    backgroundImage: `url(${Image})`,
    height: "450px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  text: {
    color: "#444444",
    fontFamily: "Open Sans",
  },
  tFonth3: {
    fontWeight: "600",
  },
  tFonth5: {
    fontWeight: "400",
  },
}));

export default function Header() {
  return (
    <>
      <Menu></Menu>
    </>
  );
}
