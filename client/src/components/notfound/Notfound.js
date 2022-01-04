import React from "react";
import notfound from "./notfound.json";
import { Grid, Typography, Chip } from "@mui/material";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { useStyles } from "./NotfoundStyles";

const Notfound = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notfound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      container
      justify="center"
      style={{ overflow: "hidden", maxHeight: "100vh" }}
    >
      <Grid item style={{ textAlign: "center" }}>
        <Lottie
          // className={classes.lottie}
          style={{
            height: "100vh",
            width: "100vw",
            position: "relative",
            // marginTop: "10vh",
            // position: "absolute",
          }}
          options={defaultOptions}
        />
        <Grid
          container
          lg={12}
          md={12}
          justify="center"
          style={{
            // padding: "1% 0 0 0 ",
            //    position: "absolute"
            position: "absolute",
            top: "5vh",
          }}
        >
          <Grid item lg={12} md={12} style={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              className={classes.text}
              style={{
                fontFamily: "Press Start 2P, cursive",
                fontWeight: "bold",
              }}
            >
              Walk. Jump. Oops page not found
            </Typography>
            <Link to="/">
              <Chip
                className={classes.chip}
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "1%",
                  cursor: "pointer",
                }}
                label="Back to Home"
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Notfound;
