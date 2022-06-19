import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import NavLanding from "../navlanding/NavLanding";
import Searchbar from "../search/Searchbar";
import pdf1 from "../../assets/priya_resume.pdf";
import { useStyles } from "./DocStyles";
import Footer from "../footer/Footer";

const Doc = () => {
  const classes = useStyles();
  const docList = [
    {
      src: pdf1,
      title: "Resume",
      description: "blah blah blah blah blah",
    },
    {
      src: pdf1,
      title: "Resume 2",
      description: "blah blah blah blah blah",
    },
    {
      src: pdf1,
      title: "Resume 3",
      description: "blah blah blah blah blah",
    },
    {
      src: pdf1,
      title: "Resume 4",
      description: "blah blah blah blah blah",
    },
    {
      src: pdf1,
      title: "Resume 5",
      description: "blah blah blah blah blah",
    },
  ];
  return (
    <div
      style={{
        // backgroundColor: "#271e2a",
        backgroundColor: "rgba(248, 248, 248, 1)",
        minHeight: "100vh",
      }}
    >
      <NavLanding />
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        xs={12}
        justify="center"
        style={{ marginTop: "2%" }}
      >
        <Grid item lg={7} md={7} sm={10} xs={10}>
          <Searchbar />
        </Grid>
      </Grid>
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ display: "flex", flexDirection: "row", paddingBottom: "10%" }}
      >
        <Grid item lg={12} md={12} className={classes.grid}>
          <Grid container style={{ padding: "50px 25px" }}>
            <Grid item lg={12} md={12} xs={10} sm={10} className={classes.pdf}>
              <object width="100%" height="300" data={pdf1} />
              <Typography variant="h6" className={classes.pdfhead}>
                Priya Resume
              </Typography>
              <Typography variant="subtitle2" className={classes.pdfhead}>
                lorem ipsum blah blah blah
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{ padding: "50px 25px" }}>
            <Grid item lg={12} md={12} xs={10} sm={10} className={classes.pdf}>
              <object width="100%" height="300" data={pdf1} />
              {/* <iframe src={pdf1} /> */}
              <Typography variant="h6" className={classes.pdfhead}>
                Priya Resume
              </Typography>
              <Typography variant="subtitle2" className={classes.pdfhead}>
                lorem ipsum blah blah blah
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{ padding: "50px 25px" }}>
            <Grid item lg={12} md={12} xs={10} sm={10} className={classes.pdf}>
              <object width="100%" height="300" data={pdf1} />
              <Typography variant="h6" className={classes.pdfhead}>
                Priya Resume
              </Typography>
              <Typography variant="subtitle2" className={classes.pdfhead}>
                lorem ipsum blah blah blah
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{ padding: "50px 25px" }}>
            <Grid item lg={12} md={12} xs={10} sm={10} className={classes.pdf}>
              <object width="100%" height="300" data={pdf1} />
              <Typography variant="h6" className={classes.pdfhead}>
                Priya Resume
              </Typography>
              <Typography variant="subtitle2" className={classes.pdfhead}>
                lorem ipsum blah blah blah
              </Typography>
            </Grid>
          </Grid>
          {/* {pdf1} */}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Doc;
