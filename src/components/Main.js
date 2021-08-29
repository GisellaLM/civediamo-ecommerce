import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "./Menu";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SectionOne from "./SectionOne";

import Header from "./Header";
import SectionTwo from "./SectionTwo";
import SOurGallery from "./SOurGallery";
import Footer from "./Footer";
import Contact from "./Contact";
import MainImage from "./MainImage";
import Box from "@material-ui/core/Box";
import SideBar from "./SideBar";
export default function Main() {
  return (
    <>
      {/* <div> */}
      <Router>
        <Container maxWidth={false} disableGutters={true} style={{ margin: 0 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <MainImage></MainImage>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <SectionOne></SectionOne>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <SectionTwo></SectionTwo>
            </Grid>
            <Grid item>
              <SOurGallery></SOurGallery>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Contact></Contact>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Footer></Footer>
            </Grid>
          </Grid>
        </Container>
      </Router>
      {/* </div> */}
    </>
  );
}
