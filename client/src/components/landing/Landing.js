import React,{useState, useEffect} from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import { useStyles } from "./LandingStyles";
import NavLanding from "../navlanding/NavLanding";
import Searchbar from "../search/Searchbar";
import pdf1 from "../../assets/priya_resume.pdf";
import { Link } from "react-router-dom";

const Landing = () => {
  const classes = useStyles();

  let[prof, setProf] = useState([])

  useEffect(() =>{
    getProf()
  }, [])

  let getProf = async () => {
    let response = await fetch('http://127.0.0.1:8000/profile/')
    let data = await response.json()
    setProf(data)
  }

  if(prof!='None')
  {
  return (
    <div style={{ backgroundColor: "#271e2a", minHeight: "100vh" }}>
      <NavLanding />
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        xs={12}
        justify="center"
        style={{ marginTop: "2%" }}
      >
        <Grid item lg={7} md={7} sm={10} xs={10}>
          <Searchbar />
        </Grid>
      </Grid>
      <Grid
        container
        lg={12}
        md={12}
        justify="center"
        style={{ marginTop: "2%" }}
      >
        <Grid item lg={11} md={11}>
          <Typography className={classes.heading} variant="h4">
            Popular Uploads
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ paddingBottom: "10%" }}>
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
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/doc">
                <Button className={classes.cardbutton} size="small">
                  Get PDFs
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          style={{ padding: "30px 20px" }}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card className={classes.card} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/doc">
                <Button className={classes.cardbutton} size="small">
                  Get PDFs
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          style={{ padding: "30px 20px" }}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/doc">
                <Button className={classes.cardbutton} size="small">
                  Get PDFs
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          style={{ padding: "30px 20px" }}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card className={classes.card} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/doc">
                <Button className={classes.cardbutton} size="small">
                  Get PDFs
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          style={{ padding: "30px 20px" }}
          sm={10}
          xs={10}
          className={classes.box}
        >
          <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Subheading
              </Typography>
              <Typography variant="h5" component="div">
                Main heading
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                subject
              </Typography>
              <Typography variant="body2">
                something about it aur thoda sa description
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/doc">
                <Button className={classes.cardbutton} size="small">
                  Get PDFs
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div></div>
    </div>
  );}

  else{
    window.location.replace('/login/')
  }
};
export default Landing;
