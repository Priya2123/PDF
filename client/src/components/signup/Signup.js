import React from "react";
import { Grid, Typography } from "@material-ui/core";
import animation from "./signup.json";
import Lottie from "react-lottie";

const Signup = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container lg={12} md={12}>
      <Grid item lg={8} md={8}>
        <Lottie
          style={{ height: "100%", padding: "50px 20px" }}
          options={defaultOptions}
        />
      </Grid>
    </Grid>
  );
};

export default Signup;
