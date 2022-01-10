import React from "react";
import {
  Grid,
  Typography,
  Chip,
  TextField,
  Paper,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import priya from "../../assets/priya3.jfif";
import mahi from "../../assets/mahi.jfif";
import rishi from "../../assets/rishi.jfif";
import ForumIcon from "@mui/icons-material/Forum";

const Ask = () => {
  return (
    <>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={10} md={10} justify="center">
          <Typography variant="body1">Add your question.</Typography>
          {/* <input
          label="Question"
          placeholder="Question"
          style={{
            width: "60vw",
            borderRadius: "20px",
            // minHeight: "6vw",
            marginTop: "1%",
          }}
        /> */}
          <TextField
            multiline={true}
            rows={5}
            name="Question"
            label="Question"
            placeholder="Please enter your question."
            autoComplete="on"
            style={{ width: "100%", marginTop: "1%" }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            style={{
              color: "white",
              padding: "10px 10px",
              cursor: "pointer",
              backgroundColor: "purple",
            }}
            label="Submit"
          />
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} style={{ margin: "4% 0 3% 0" }}></Grid>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={10} md={10} justify="center">
          <Paper elevation={4} style={{ padding: "1%", marginBottom: "2%" }}>
            <Grid container lg={12} md={12}>
              <Grid item>
                {/* <Avatar>P</Avatar> */}
                <Avatar alt="" src={rishi} />
              </Grid>
              <Grid item lg={10} md={10}>
                <Typography style={{ paddingLeft: "3%" }} variant="body2">
                  Spoiderman
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
                <Typography variant="h6">Anda pehle aaya ya murgi?</Typography>
              </Grid>
            </Grid>
            <Grid container style={{ padding: "0.2% 0 0 1%" }}>
              {/* <Grid item></Grid> */}
              <Grid item>
                <Typography variant="body1">gadhaaaaaa it is</Typography>
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
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Ask;
