import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Grid } from "@mui/material";
export default function MyComponent() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };

  return (
    <Grid container lg={12} md={12}>
      <Grid item lg={10} md={10} style={{ padding: "2% 0 3% 0" }}>
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Available Props */
          size="25"
          fillColorArray={[
            "#eaa9fe",
            "#d348fd",
            "#a701db",
            "#8200aa",
            "purple",
          ]}
        />
      </Grid>
    </Grid>
  );
}
