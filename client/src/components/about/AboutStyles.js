import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  text: {
    color: "#fff",
  },
  about: {
    textAlign: "center",
    marginTop: "-30%",
    zIndex: "101",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-68vh",
    },
  },
  image: {
    borderRadius: "50%",
    height: "54vh",
    width: "30vw",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      height: "38vh",
      width: "65vw",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  aboutppl: {
    color: "#fff",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
  },
  block: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  blocksmall: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  lottie: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
