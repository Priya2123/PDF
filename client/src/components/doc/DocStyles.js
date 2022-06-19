import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  heading: {
    // color: "#fff",
    // color: "#000",
  },
  pdfhead: {
    // color: "#fff",
    // color: "#000",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  pdf: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
}));
