import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useStyles } from "./LandingStyles";
import NavLanding from "../navlanding/NavLanding";
import Searchbar from "../search/Searchbar";
import search from "../../assets/search.png";
import download from "../../assets/download.png";
import upload from "../../assets/upload.png";
import LandingCard from "./LandingCard";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";
import { Styleddiv, StyledPaper } from "../../toggle/StyledComponents";

const Landing = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const pdfList = [
    {
      subhead: "Subheading 1",
      mainhead: "Main Heading 1",
      subject: "Subject",
      description: "something about the subject",
      number: 30,
    },
    {
      subhead: "Subheading 2",
      mainhead: "Main Heading 2",
      subject: "Subject",
      description: "something about the subject",
      number: 40,
    },
    {
      subhead: "Subheading 3",
      mainhead: "Main Heading 3",
      subject: "Subject",
      description: "something about the subject",
      number: 10,
    },
    {
      subhead: "Subheading 4",
      mainhead: "Main Heading 4",
      subject: "Subject",
      description: "something about the subject",
      number: 60,
    },
    {
      subhead: "Subheading 5",
      mainhead: "Main Heading 5",
      subject: "Subject",
      description: "something about the subject",
      number: 60,
    },
  ];
  return (
    <Styleddiv
      style={{
        // backgroundColor: "#271e2a",
        // backgroundColor: "rgba(248, 248, 248, 1)",
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
      <Grid container justify="center">
        <Grid item lg={10} md={10} justify="center">
          <StyledPaper
            style={{
              // backgroundColor: "#0f0015",
              // backgroundColor: "#eaeaea",
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
              }}
              justify="center"
            >
              <div style={{ textAlign: "center" }}>
                <img
                  style={{
                    height: "60%",
                    width: "18vw",
                  }}
                  src={search}
                  alt="/"
                />
                <Typography variant="h5" className={classes.text}>
                  {t("search")}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.text}
                  style={{ maxWidth: "30vw" }}
                >
                  {t("search_description")}
                </Typography>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  style={{ height: "60%", width: "27vw" }}
                  src={download}
                  alt="/"
                />
                <Typography variant="h5" className={classes.text}>
                  {t("download")}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.text}
                  style={{ maxWidth: "30vw" }}
                >
                  {t("download_description")}
                </Typography>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  style={{
                    height: "60%",
                    width: "20vw",
                  }}
                  src={upload}
                  alt="/"
                />
                <Typography variant="h5" className={classes.text}>
                  {t("upload")}
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  {t("upload_description")}
                </Typography>
              </div>
            </Grid>
          </StyledPaper>
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={11} md={11}>
          <Typography className={classes.heading} variant="h4">
            Popular Uploads
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ paddingBottom: "10%" }}>
        {pdfList?.map((pdf) => (
          <LandingCard
            key={pdf.id}
            subhead={pdf.subhead}
            mainhead={pdf.mainhead}
            subject={pdf.subject}
            description={pdf.description}
            number={pdf.number}
          />
        ))}
      </Grid>
      <Footer />
      <div></div>
    </Styleddiv>
  );
};
export default Landing;
