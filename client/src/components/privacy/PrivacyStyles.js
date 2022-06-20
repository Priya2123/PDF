import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  text: {
    paddingTop: "5rem",
    paddingBottom: "1.4rem",
    fontWeight: "bold",
    color: "purple",
    letterSpacing: "0.1rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "3rem",
    },
  },
  name: {
    paddingTop: "2.5rem",
    paddingBottom: "1.7rem",
    fontWeight: "bold",
    color: "#000",
    letterSpacing: "0.1rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      padding: "1rem 2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "2.6rem",
    },
  },
  textheading: {
    paddingTop: "2.8rem",
    paddingBottom: "1.4rem",
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.74rem",
    },
  },
  textbody: {
    color: "#494848",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.1rem",
    },
  },
  textbodylast: {
    color: "#494848",
    paddingBottom: "5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  link: {
    paddingTop: "2vh",
    color: "#959595",
    cursor: "pointer",
    textAlign: "center",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  footerlink: {
    textDecoration: "none",
    color: "#fff",
    cursor: "pointer",
  },
}));
