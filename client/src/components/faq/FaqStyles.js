import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  png: {
    height: "40%",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      height: "15%",
    },
  },
}));
