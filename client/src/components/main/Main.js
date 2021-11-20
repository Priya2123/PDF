import React from "react";
import Nav from "../nav/Nav";
import { useStyles } from "./MainStyles";
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <div style={{ backgroundColor: "#292c35" }}>
          <Nav />
          <Grid
            container
            justify="center"
            style={{
              margin: "auto",
              verticalAlign: "middle",
              height: "85vh",
              display: "table-cell",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Grid item>
              <Grid container justify="center" style={{ textAlign: "center" }}>
                <Grid item lg={12} md={12} sm={10} xs={10}>
                  <Typography
                    className={classes.text}
                    variant="h4"
                    style={{ fontWeight: "bold" }}
                  >
                    The simplest way to keep notes
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="center" style={{ textAlign: "center" }}>
                <Grid item lg={6} md={6} xs={11} sm={11}>
                  <Typography variant="h5" className={classes.text}>
                    All your notes, synced on all your devices. Get Simplenote
                    now for iOS, Android, Mac, Windows, Linux, or in your
                    browser.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </motion.div>
    </>
  );
};

export default Main;
