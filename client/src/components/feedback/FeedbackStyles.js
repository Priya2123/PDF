import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
    color: "purple",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5vh",
    },
  },
  rating: {
    color: "purple",
  },
  lottie: {
    width: "50%",
    height: "20vh",
    objectFit: "contain",
  },
  text: {
    backgroundColor: "lavender",
    color: "purple",
    width: "100%",
    // minHeight: "30vh",
    // border: "1px solid purple",
  },
  btn: {
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "5vh",
    },
  },
  btnsend: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "10vh",
    },
  },
}));
