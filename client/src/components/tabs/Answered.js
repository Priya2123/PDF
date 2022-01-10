import React from "react";
import { Grid, Typography, Paper, Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import priya from "../../assets/priya3.jfif";
import mahi from "../../assets/mahi.jfif";
import rishi from "../../assets/rishi.jfif";
import ForumIcon from "@mui/icons-material/Forum";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Answered = () => {
  return (
    <Grid container lg={12} md={12} justify="center">
      <Grid item lg={12} md={12} justify="center">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            maxWidth: "90vw",
            align: "center",
          }}
        >
          <Typography variant="caption">
            20,000+ questions from users
          </Typography>
          <Typography variant="caption" style={{ cursor: "pointer" }}>
            Sort{" "}
            <ExpandMoreIcon style={{ paddingTop: "10px" }} fontSize="small" />
          </Typography>
        </div>
        <Grid container lg={12} md={12} justify="center">
          <Grid item lg={10} md={10} justify="center">
            <Paper elevation={4} style={{ padding: "1%", marginBottom: "2%" }}>
              <Grid container lg={12} md={12}>
                <Grid item>
                  {/* <Avatar>P</Avatar> */}
                  <Avatar alt="" src={mahi} />
                </Grid>
                <Grid item lg={10} md={10}>
                  <Typography style={{ paddingLeft: "3%" }} variant="body2">
                    Oldmonk
                    <br />
                    <Typography variant="caption" style={{ color: "gray" }}>
                      @Thapar Institute
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item lg={1} md={1}>
                  <Typography variant="caption">2 days ago</Typography>
                </Grid>
              </Grid>
              <Grid container style={{ padding: "1% 0 0 1%" }}>
                {/* <Grid item></Grid> */}
                <Grid item>
                  <Typography variant="h6">
                    Anda pehle aaya ya murgi?
                  </Typography>
                </Grid>
              </Grid>
              <Grid container style={{ padding: "0.2% 0 0 1%" }}>
                {/* <Grid item></Grid> */}
                <Grid item>
                  <Typography variant="body1">darruuuuuu it is</Typography>
                </Grid>
              </Grid>
              <Grid container style={{ padding: "0.3% 0 0 1%" }}>
                <Grid item>
                  <ForumIcon
                    fontSize="small"
                    style={{ paddingTop: "20%", cursor: "pointer" }}
                  />
                  <Typography variant="caption">7</Typography>
                </Grid>
                <Grid item>
                  <CheckCircleIcon
                    style={{ marginLeft: "2vw", color: "green" }}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Paper elevation={4} style={{ padding: "1%", marginBottom: "2%" }}>
              <Grid container lg={12} md={12}>
                <Grid item>
                  {/* <Avatar>P</Avatar> */}
                  <Avatar alt="" src={mahi} />
                </Grid>
                <Grid item lg={10} md={10}>
                  <Typography style={{ paddingLeft: "3%" }} variant="body2">
                    Oldmonk
                    <br />
                    <Typography variant="caption" style={{ color: "gray" }}>
                      @Thapar Institute
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item lg={1} md={1}>
                  <Typography variant="caption">2 days ago</Typography>
                </Grid>
              </Grid>
              <Grid container style={{ padding: "1% 0 0 1%" }}>
                {/* <Grid item></Grid> */}
                <Grid item>
                  <Typography variant="h6">
                    Anda pehle aaya ya murgi?
                  </Typography>
                </Grid>
              </Grid>
              <Grid container style={{ padding: "0.2% 0 0 1%" }}>
                {/* <Grid item></Grid> */}
                <Grid item>
                  <Typography variant="body1">darruuuuuu it is</Typography>
                </Grid>
              </Grid>
              <Grid container style={{ padding: "0.3% 0 0 1%" }}>
                <Grid item>
                  <ForumIcon
                    fontSize="small"
                    style={{ paddingTop: "20%", cursor: "pointer" }}
                  />
                  <Typography variant="caption">7</Typography>
                </Grid>
                <Grid item>
                  <CheckCircleIcon
                    style={{ marginLeft: "2vw", color: "green" }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Answered;
