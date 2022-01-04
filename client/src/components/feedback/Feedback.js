import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useStyles } from "./FeedbackStyles";
import Box from "@mui/material/Box";
import Lottie from "react-lottie";
import rating from "./rating.json";
import RatingComp from "./RatingComp2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Feedback = (props) => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rating,
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
                style={{ textAlign: "center", padding: "0 10% 0 10%" }}
                className={classes.heading}
              >
                Feel free to drop us your feedback.
              </Typography>
              <Lottie
                className={classes.lottie}
                style={{ height: "60vh", width: "100%" }}
                options={defaultOptions}
              />
            </Grid>
            <Grid item lg={7} md={7} style={{ padding: "3% 0 3% 3%" }}>
              <Typography variant="h4" className={classes.heading}>
                How satisfied are you overall with the support of our system?
              </Typography>
              <RatingComp />
              <Grid container lg={12} md={12} justify="center">
                <Grid item lg={12} md={12}>
                  <Box className={classes.text}>
                    <TextField
                      multiline={true}
                      rows={7}
                      name="Feedback"
                      label="Feedback"
                      placeholder="Please share your feedback."
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
                    Send Feedback
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

export default Feedback;
