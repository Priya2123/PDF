import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import animation from "./signup.json";
import Lottie from "react-lottie";

const Signup = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + value);
    event.preventDefault();
  };
  return (
    <Grid
      container
      lg={12}
      md={12}
      style={{ backgroundColor: "#000" }}
      justify="center"
    >
      <Grid item lg={8} md={8}>
        <Lottie style={{}} options={defaultOptions} />
      </Grid>
      <Grid item lg={4} md={4}>
        <form>
          <label>
            Username:
            <input type="text" />
          </label>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            College:
            <input type="text" />
          </label>
          <label>
            Year:
            <input type="number" />
          </label>
          <label>
            Branch:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <label>
            Confirm Password:
            <input type="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
