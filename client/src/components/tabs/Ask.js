import React from "react";
import { Grid, Typography, Chip, TextField } from "@mui/material";

const Ask = () => {
  return (
    <Grid container lg={12} md={12} justify="center">
      <Grid item lg={8} md={8} justify="center">
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
    </Grid>
  );
};

export default Ask;
