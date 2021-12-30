import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Paper,
} from "@material-ui/core";
import { useStyles } from "./LandingStyles";
import NavLanding from "../navlanding/NavLanding";
import Searchbar from "../search/Searchbar";
import pdf1 from "../../assets/priya_resume.pdf";
import { Link } from "react-router-dom";
import search from "../../assets/search.png";
import download from "../../assets/download.png";
import upload from "../../assets/upload.png";

const Landing = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#271e2a", minHeight: "100vh" }}>
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
      <Grid container justify="center">
        <Grid item lg={10} md={10} justify="center">
          <Paper
            style={{
              backgroundColor: "#0f0015",
              marginBottom: "15vh",
              marginTop: "6vh",
            }}
            elevation={4}
          >
            <Grid
              container
              lg={12}
              md={12}
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "3vh",
                // paddingBottom: "3vh",
              }}
              justify="center"
            >
              {/* <Grid item lg={4} md={4}> */}
              <div style={{ textAlign: "center" }}>
                <img
                  style={{
                    height: "60%",
                    width: "18vw",
                    // padding: "2rem",
                  }}
                  src={search}
                  alt="/"
                />
                <Typography variant="h5" className={classes.text}>
                  Search
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  the documents you need
                </Typography>
              </div>
              {/* </Grid> */}
              {/* <Grid item lg={4} md={4} spacing={4}> */}
              <div style={{ textAlign: "center" }}>
                <img
                  style={{ height: "60%", width: "27vw" }}
                  src={download}
                  alt="/"
                />
                <Typography variant="h5" className={classes.text}>
                  Download
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  the material and study to boost your <br /> preparation from
                  various colleges
                </Typography>
              </div>
              {/* </Grid> */}
              {/* <Grid item lg={4} md={4} spacing={4}> */}
              <div style={{ textAlign: "center" }}>
                <img
                  style={{
                    height: "60%",
                    width: "20vw",
                    // padding: "2rem",
                    // marginLeft: "8vw",
                  }}
                  src={upload}
                  alt="/"
                />
                <Typography variant="h5" className={classes.text}>
                  Upload
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  the material to help others
                </Typography>
              </div>
              {/* </Grid> */}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        // style={{ marginTop: "2%" }}
      >
        <Grid item lg={11} md={11}>
          <Typography className={classes.heading} variant="h4">
            Popular Uploads
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ paddingBottom: "10%" }}>
        <Grid
          item
          style={{ padding: "30px 20px" }}
          lg={3}
          md={3}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/doc">
                  <Button className={classes.cardbutton} size="small">
                    Get PDFs
                  </Button>
                </Link>
                <Typography variant="body1">(30)</Typography>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          style={{ padding: "30px 20px" }}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card className={classes.card} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/doc">
                  <Button className={classes.cardbutton} size="small">
                    Get PDFs
                  </Button>
                </Link>
                <Typography variant="body1">(30)</Typography>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          style={{ padding: "30px 20px" }}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/doc">
                  <Button className={classes.cardbutton} size="small">
                    Get PDFs
                  </Button>
                </Link>
                <Typography variant="body1">(30)</Typography>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          style={{ padding: "30px 20px" }}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card className={classes.card} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/doc">
                  <Button className={classes.cardbutton} size="small">
                    Get PDFs
                  </Button>
                </Link>
                <Typography variant="body1">(30)</Typography>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          style={{ padding: "30px 20px" }}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/doc">
                  <Button className={classes.cardbutton} size="small">
                    Get PDFs
                  </Button>
                </Link>
                <Typography variant="body1">(30)</Typography>
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
};
export default Landing;
