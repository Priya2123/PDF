import React from "react";
import Nav from "../nav/Nav";
import { useStyles } from "./MainStyles";
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Main = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  // const currentLanguageCode = cookies.get("i18next") || "en";
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
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
                    {t("welcome_message")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="center" style={{ textAlign: "center" }}>
                <Grid item lg={6} md={6} xs={11} sm={11}>
                  <Typography variant="h5" className={classes.text}>
                    {t("welcome_para")}
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
