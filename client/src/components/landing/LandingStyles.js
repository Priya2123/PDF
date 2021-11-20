import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      marginTop: "8vh",
    },
  },
  pdfhead: {
    color: "#fff",
    textAlign: "center",
  },
  cardbutton: {
    textDecoration: " none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  box: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
}));
