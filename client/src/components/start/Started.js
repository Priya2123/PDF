import React from "react";
import Nav from "../nav/Nav";
import { Grid, Typography, Button } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Lottie from "react-lottie";
import animation from "./animation.json";
import { useStyles } from "./StartedStyles";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Contact from "../contact/Contact";

const Started = () => {
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
      <Nav />
      <Parallax
        pages={2}
        style={{ top: "0", left: "0", backgroundColor: "#461257" }}
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#461257",
          }}
        >
          <Grid container lg={12} md={12} className={classes.row}>
            <Grid item lg={12} md={12}>
              <Grid container justify="center">
                <Grid item lg={5} md={5}>
                  <Grid
                    container
                    justify="center"
                    style={{ marginTop: "10%" }}
                    // className={classes.row}
                  >
                    <Grid item lg={11} md={11}>
                      <Grid
                        container
                        justify="center"
                        style={{ textAlign: "center" }}
                      >
                        <Grid item>
                          <Typography variant="h4" className={classes.heading}>
                            <span style={{ color: "#61dafb" }}> PDF</span>{" "}
                            <Typewriter
                              options={{
                                strings: ["FINDER", "DOWNLOADER", "UPLOADER"],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                              }}
                            />
                          </Typography>
                        </Grid>
                        <Grid item sm={11} xs={11}>
                          <Typography
                            variant="subtitle1"
                            className={classes.body}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </Typography>
                          <Link to="/login">
                            {" "}
                            <Button className={classes.btn}>Sign Up</Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={6} md={6}>
                  <Lottie className={classes.lottie} options={defaultOptions} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#593876" }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Started;
