import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useStyles } from "./SupportStyles";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import animation from "./support.json";

const Support = (props) => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={12} md={12}>
          <Grid container lg={12} md={12} justify="center">
            <Grid
              item
              lg={4}
              md={4}
              style={{
                backgroundColor: "lavender",
                padding: "3% 0 3% 0",
                minHeight: "100vh",
                textAlign: "center",
              }}
            >
              <Link to="/landing">
                <ArrowBackIcon
                  style={{
                    fontWeight: "bold",
                    position: "absolute",
                    marginLeft: "-13vw",
                    border: "1px solid black",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                />
              </Link>
              <Typography
                variant="h3"
                style={{ textAlign: "center", padding: "0 10% 17% 10%" }}
                className={classes.heading}
              >
                Need some help?
              </Typography>
              <Lottie
                className={classes.lottie}
                style={{ height: "55vh", width: "100%" }}
                options={defaultOptions}
              />
            </Grid>
            <Grid item lg={7} md={7} style={{ padding: "3% 0 3% 3%" }}>
              <Typography variant="h4" className={classes.heading}>
                Hi, How can we help?
              </Typography>
              <Grid container lg={12} md={12} justify="center">
                <Grid item lg={12} md={12}>
                  <Box className={classes.text}>
                    <TextField
                      multiline={true}
                      rows={1}
                      name="Name"
                      label="Name"
                      placeholder="Name"
                      autoComplete="on"
                      style={{ width: "100%", color: "purple" }}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                lg={12}
                md={12}
                justify="center"
                style={{ marginTop: "1%" }}
              >
                <Grid item lg={12} md={12}>
                  <Box className={classes.text}>
                    <TextField
                      multiline={true}
                      rows={1}
                      name="Email"
                      label="Email"
                      placeholder="Email"
                      autoComplete="on"
                      style={{ width: "100%", color: "purple" }}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                lg={12}
                md={12}
                justify="center"
                style={{ marginTop: "1%" }}
              >
                <Grid item lg={12} md={12}>
                  <Box className={classes.text}>
                    <TextField
                      multiline={true}
                      rows={1}
                      name="Mobile Number"
                      label="Mobile Number"
                      placeholder="Mobile Number"
                      autoComplete="on"
                      style={{ width: "100%", color: "purple" }}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                lg={12}
                md={12}
                justify="center"
                style={{ marginTop: "1%" }}
              >
                <Grid item lg={12} md={12}>
                  <Box className={classes.text}>
                    <TextField
                      multiline={true}
                      rows={7}
                      name="Complaint"
                      label="Complaint"
                      placeholder="Please send your detailed complaint."
                      autoComplete="on"
                      style={{ width: "100%", color: "purple" }}
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                lg={12}
                md={12}
                justify="center"
                style={{ paddingTop: "6%" }}
              >
                <Grid item lg={4} md={4}>
                  <Button
                    variant="contained"
                    style={{
                      padding: " 15px 40px",
                      fontSize: "16px",
                      backgroundColor: "purple",
                      color: "lavender",
                      justifyContent: "center",
                    }}
                  >
                    Send Complaint
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Support;
