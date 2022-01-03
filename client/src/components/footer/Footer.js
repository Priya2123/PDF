import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { useStyles } from "./FooterStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      lg={12}
      md={12}
      justify="center"
      style={{
        textAlign: "center",
        backgroundColor: "#0f0015",
        padding: "5% 0",
      }}
    >
      <Grid item lg={4} md={4}>
        <Typography variant="h6" className={classes.text}>
          THINGS
        </Typography>
        <hr width="40%" align="center" size="5" style={{ margin: "auto" }} />
        <Typography
          variant="body1"
          className={classes.text}
          style={{ marginTop: "4%" }}
        >
          Feedback
        </Typography>
        {/* <Divider
          style={{ backgroundColor: "white", width: "40%" }}
          variant="middle"
        /> */}
        <Typography variant="body1" className={classes.text}>
          Support
        </Typography>
      </Grid>
      <Grid item lg={4} md={4}></Grid>
    </Grid>
  );
};

export default Footer;
