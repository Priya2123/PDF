import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    // color: "#000",
    paddingTop: "4%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "9vh",
    },
  },
  main: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "100%",
      marginLeft: "25vw",
      marginRight: "20vw",
    },
  },
  form: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      marginLeft: "8vw",
    },
  },
}));
