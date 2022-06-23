import React from "react";
import Lottie from "react-lottie";
import multi from "./multi.json";
import Nav from "../nav/Nav";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./AboutStyles";
import { motion } from "framer-motion";
import priya from "../../assets/priya3.jfif";
import mahi from "../../assets/mahi.jfif";
import rishi from "../../assets/rishi.jfif";
import { useTranslation } from "react-i18next";

const About = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: multi,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Nav />
      <Lottie
        style={{ height: "80vh", width: "80%" }}
        className={classes.lottie}
        options={defaultOptions}
      />
      <Grid container justify="center" lg={12} md={12}>
        <Grid item>
          <Grid className={classes.about} container justify="center">
            <Grid item lg={6} md={6} sm={10} xs={10}>
              <Typography
                variant="h5"
                className={classes.text}
                style={{ marginBottom: "2%", fontWeight: "bold" }}
              >
                {t("about")}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ marginTop: "15%" }}
      >
        <Grid item lg={4} md={4} xs={11} sm={11}>
          <Typography
            variant="h3"
            className={classes.text}
            style={{ fontWeight: "bold" }}
          >
            MEET THE TEAM
          </Typography>
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={9} md={9}>
          <Grid container style={{ paddingTop: "10%" }} justify="center">
            <Grid item lg={6} md={6} sm={8} xs={8}>
              <motion.li
                className="card"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "transparent",
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 0.2,
                  },
                  filter: [
                    "hue-rotate(0) contrast(100%)",
                    "hue-rotate(360deg) contrast(200%)",
                    "hue-rotate(45deg) contrast(300%)",
                    "hue-rotate(0) contrast(100%)",
                  ],
                }}
              >
                <img
                  // src="https://i.pinimg.com/originals/92/82/eb/9282eb77c058ac603483139c2f6f2542.jpg"
                  src={priya}
                  alt=""
                  className={classes.image}
                />
              </motion.li>
            </Grid>
            <Grid item lg={6} md={6} xs={11} sm={11}>
              <Typography variant="h4" className={classes.aboutppl}>
                Priya Aggarwal
              </Typography>
              <Typography variant="h6" className={classes.aboutppl}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={{ paddingTop: "13%" }} justify="center">
            <Grid
              item
              lg={6}
              md={6}
              xs={11}
              sm={11}
              className={classes.blocksmall}
            >
              <Typography variant="h4" className={classes.aboutppl}>
                Mayank Nagpal
              </Typography>
              <Typography variant="h6" className={classes.aboutppl}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
            <Grid item sm={8} xs={8} lg={6} md={6}>
              <motion.li
                className="card"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "transparent",
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 0.2,
                  },
                  filter: [
                    "hue-rotate(0) contrast(100%)",
                    "hue-rotate(360deg) contrast(200%)",
                    "hue-rotate(45deg) contrast(300%)",
                    "hue-rotate(0) contrast(100%)",
                  ],
                }}
              >
                <img
                  // src="https://th.bing.com/th/id/OIP.-gcGCLU79TJW4N_OioDZMgHaHD?w=220&h=210&c=7&o=5&dpr=1.5&pid=1.7"
                  src={mahi}
                  alt=""
                  className={classes.image}
                />
              </motion.li>
            </Grid>
            <Grid item lg={6} md={6} xs={11} sm={11} className={classes.block}>
              <Typography variant="h4" className={classes.aboutppl}>
                Mayank Nagpal
              </Typography>
              <Typography variant="h6" className={classes.aboutppl}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            style={{ paddingTop: "13%", paddingBottom: "20%" }}
            justify="center"
          >
            <Grid item lg={6} md={6} sm={8} xs={8}>
              <motion.li
                className="card"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "transparent",
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 0.2,
                  },
                  filter: [
                    "hue-rotate(0) contrast(100%)",
                    "hue-rotate(360deg) contrast(200%)",
                    "hue-rotate(45deg) contrast(300%)",
                    "hue-rotate(0) contrast(100%)",
                  ],
                }}
              >
                <img
                  // src="https://pbs.twimg.com/media/DbbpmQBVwAABhLX.jpg"
                  src={rishi}
                  alt=""
                  className={classes.image}
                />
              </motion.li>
            </Grid>
            <Grid item lg={6} md={6} xs={11} sm={11}>
              <Typography variant="h4" className={classes.aboutppl}>
                Rishi Kumar
              </Typography>
              <Typography variant="h6" className={classes.aboutppl}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
