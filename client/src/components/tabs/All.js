import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const All = () => {
  return (
    <Grid container lg={12} md={12} justify="center">
      <Grid item lg={12} md={12} justify="center">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption">
            90,000+ questions from users
          </Typography>
          <Typography variant="caption" style={{ cursor: "pointer" }}>
            Sort{" "}
            <ExpandMoreIcon style={{ paddingTop: "10px" }} fontSize="small" />
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default All;
