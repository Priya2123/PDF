import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  //   back: {
  //     backdropFilter: "blur(10px)",
  //   },
  container: {
    border: "1px solid #fff",
    padding: "20px",
    borderRadius: "25px",
    // backgroundColor: "#b491c8",
    // background: "rgba(0,0,0,0.8)",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  search: {
    width: "100%",
    // color: "#fff",
    border: "1.5px solid #fff",
    borderRadius: "25px",
    textDecoration: "none",
    backgroundColor: "#fff",
    padding: "8px 0",
    margin: "10px",
  },
  message: {
    width: "100%",
    // color: "#fff",
    border: "1.5px solid #fff",
    borderRadius: "25px",
    textDecoration: "none",
    backgroundColor: "#fff",
    padding: "8px 0",
    minHeight: "30vh",
    // height: "90%",
    margin: "10px",
  },
  chip: {
    padding: "25px 40px",
    fontSize: "18px",
    backgroundColor: "#fff",
    // fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      // border: "1px solid #000",
    },
  },
}));
