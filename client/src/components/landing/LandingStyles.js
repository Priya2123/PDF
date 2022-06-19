import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    // color: "#fff",
    // color: "#000",
    [theme.breakpoints.down("sm")]: {
      marginTop: "8vh",
    },
  },
  pdfhead: {
    // color: "#fff",
    // color: "#000",
    textAlign: "center",
  },
  cardbutton: {
    textDecoration: " none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  card: {
    // backgroundColor: "#eaeaea",
  },
  box: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  text: {
    // color: "#fff",
    // color: "#000",
  },
}));
