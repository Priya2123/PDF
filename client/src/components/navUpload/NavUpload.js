import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import Dropdown from "../nav/Dropdown";
import ToggleMode from "../../toggle/ToggleMode";
import { StyledAppBar } from "../../toggle/StyledComponents";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    height: "15vh",
  },
  nav: {
    paddingTop: "1%",
    paddingBottom: "0.5%",
    // backgroundColor: "#7952b3",
    fontFamily: "Montserrat, tahoma, verdana, sans-serif",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    zIndex: "101",
  },
  button: {
    textDecoration: "none",
    color: "white",
    zIndex: "101",
    width: "100%",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <StyledAppBar position="static" className={classes.nav}>
        <Toolbar>
          <img
            style={{ height: "9%", width: "9%", zIndex: "101" }}
            src="https://cdni.iconscout.com/illustration/premium/thumb/man-studying-research-paper-2407302-2012369.png"
            alt=""
          />
          <Typography variant="h5" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#61dafb",
                  fontWeight: "bold",
                  marginLeft: "1%",
                }}
              >
                PDF
              </span>{" "}
              <span style={{ color: "white" }}>FINDER</span>
              <br />
            </Link>
            <Typography
              //   variant="caption"
              style={{ fontSize: "10px", zIndex: "101" }}
              className={classes.title}
            >
              BUILT WITH {`<3`} BY @OLDMONKS
            </Typography>
          </Typography>
          <Link to="/" className={classes.link}>
            {" "}
            <Button color="inherit" className={classes.button}>
              {t("home")}
            </Button>
          </Link>
          <Link to="/landing">
            <Button
              color="inherit"
              className={classes.button}
              style={{ marginLeft: "1%", zIndex: "101" }}
            >
              {t("download")}
            </Button>
          </Link>
          <Link to="/profile">
            {" "}
            <Button
              color="inherit"
              className={classes.button}
              style={{ marginLeft: "1%", zIndex: "101" }}
            >
              {t("my_profile")}
            </Button>
          </Link>
          <Dropdown />
          <div>
            <Tooltip title="Logout" placement="bottom">
              <ExitToAppIcon style={{ cursor: "pointer", color: "white" }} />
            </Tooltip>
          </div>
          <ToggleMode />
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
