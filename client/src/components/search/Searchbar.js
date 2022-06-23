import React from "react";
import { Box, TextField, InputBase } from "@material-ui/core";
import { useStyles } from "./SearchbarStyles";
import { StyledInputBase } from "../../toggle/StyledComponents";

const Searchbar = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Box component="form" noValidate autoComplete="on">
        <TextField
          className={classes.search}
          id="outlined-basic"
          label="Search for PDFs"
          variant="outlined"
        />
      </Box> */}
      <StyledInputBase
        className={classes.search}
        placeholder="Search "
        //   onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
