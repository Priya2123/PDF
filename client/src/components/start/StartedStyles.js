import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#fff",
    fontWeight: "bold",
  },
  body: {
    color: "#fff",
  },
  btn: {
    color: "#fff",
    padding: "10px 40px",
    border: "1px solid #fff",
    marginTop: "5%",
    fontWeight: "bold",
    width: "32%",
  },
  row: {
    marginTop: "5%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "35vh",
    },
  },
  lottie: {
    height: "80vh",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%",
    },
  },
}));
