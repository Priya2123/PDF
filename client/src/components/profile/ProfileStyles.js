import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  image: {
    height: "54vh",
    width: "25vw",
    margin: "auto",
    marginTop: "22vh",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      margin: "auto",
      marginLeft: "5vw",
      marginRight: "5vw",
    },
  },
  icon: {
    cursor: "pointer",
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "25vh",
    },
  },
  arrow: {
    [theme.breakpoints.down("sm")]: {
      // marginLeft: "5vw",
    },
  },
}));
