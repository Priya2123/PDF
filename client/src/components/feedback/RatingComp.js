import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useStyles } from "./FeedbackStyles";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const RatingComp = () => {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  return (
    <Grid container>
      <Grid item lg={10} md={10} style={{ padding: "2% 0 3% 0" }}>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            size="large"
            precision={0.5}
            onChange={(event, newValue) => setValue(newValue)}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon
                style={{
                  opacity: 0.6,
                }}
                //   fontSize="inherit"
              />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default RatingComp;
