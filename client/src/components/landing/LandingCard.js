import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import { useStyles } from "./LandingStyles";
import { Link } from "react-router-dom";

const LandingCard = (props) => {
  const classes = useStyles();
  return (
    <Grid
      item
      style={{ padding: "30px 20px" }}
      lg={3}
      md={3}
      sm={10}
      xs={10}
      className={classes.box}
    >
      <Card sx={{ minWidth: 275 }} className={classes.card}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.subhead}
          </Typography>
          <Typography variant="h5" component="div">
            {props.mainhead}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.subject}
          </Typography>
          <Typography variant="body2">
            {props.description}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link to="/doc">
              <Button className={classes.cardbutton} size="small">
                Get PDFs
              </Button>
            </Link>
            <Typography variant="body1">({props.number})</Typography>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LandingCard;
