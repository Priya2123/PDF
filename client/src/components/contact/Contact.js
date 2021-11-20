import React from "react";
import { Grid, Typography, InputBase, Chip } from "@material-ui/core";
import { useStyles } from "./ContactStyles";

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.back}>
      <Grid
        container
        lg={12}
        md={12}
        sm={11}
        xs={11}
        justify="center"
        className={classes.container}
      >
        <Grid container>
          <Grid item>
            <Typography variant="h4">Contact Us</Typography>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12}>
          <Grid container>
            <Grid
              item
              lg={5}
              md={5}
              sm={11}
              xs={11}
              style={{ paddingRight: "5%" }}
            >
              <InputBase
                className={classes.search}
                placeholder="Name "
                //   onChange={(e) => setText(e.target.value)}
              />
              <InputBase
                className={classes.search}
                placeholder="Email Address "
                //   onChange={(e) => setText(e.target.value)}
              />
              <InputBase
                className={classes.search}
                placeholder="Phone Number "
                //   onChange={(e) => setText(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={11} xs={11}>
              <InputBase
                className={classes.message}
                placeholder="Message "
                //   onChange={(e) => setText(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Chip label="Submit" className={classes.chip} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
