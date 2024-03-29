import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { useStyles } from "./FooterStyles";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import {
  StyledFooterGrid,
  StyledTypography,
} from "../../toggle/StyledComponents";

const Footer = () => {
  const classes = useStyles();
  return (
    <StyledFooterGrid
      container
      lg={12}
      md={12}
      justify="center"
      style={{
        textAlign: "center",
        // borderTop: "1px solid #000",
        // backgroundColor: "#0f0015",
        // backgroundColor: "#eaeaea",
        padding: "5% 0",
      }}
    >
      <Grid item lg={3} md={3}>
        <Typography variant="h6" className={classes.text}>
          CONNECT
        </Typography>
        <hr width="50%" align="center" size="5" style={{ margin: "auto" }} />
        <Link to="/feedback" style={{ textDecoration: "none" }}>
          <StyledTypography
            variant="body1"
            className={classes.text}
            style={{ marginTop: "4%" }}
            // underline="none"
          >
            Feedback
          </StyledTypography>
        </Link>
        {/* <Divider
          style={{ backgroundColor: "white", width: "40%" }}
          variant="middle"
        /> */}
        <Link to="/support" style={{ textDecoration: "none" }}>
          <StyledTypography variant="body1" className={classes.text}>
            Support
          </StyledTypography>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <StyledTypography variant="body1" className={classes.text}>
            Faq
          </StyledTypography>
        </Link>
        <Link to="/questions" style={{ textDecoration: "none" }}>
          <StyledTypography variant="body1" className={classes.text}>
            Questions ans answers
          </StyledTypography>
        </Link>
      </Grid>
      <Grid item lg={3} md={3}>
        <Typography variant="h6" className={classes.text}>
          AROUND THE WEB
        </Typography>
        <hr
          width="65%"
          align="center"
          size="5"
          style={{ margin: "auto", marginBottom: "4%" }}
        />
        <FacebookIcon fontSize="large" className={classes.icon} />
        <YouTubeIcon fontSize="large" className={classes.icon} />
        <LinkedInIcon fontSize="large" className={classes.icon} />
        <InstagramIcon fontSize="large" className={classes.icon} />
        <TwitterIcon fontSize="large" className={classes.icon} />
      </Grid>
      <Grid item lg={3} md={3}>
        <Typography variant="h6" className={classes.text}>
          POLICY
        </Typography>
        <hr width="50%" align="center" size="5" style={{ margin: "auto" }} />
        <Link to="/privacyone" style={{ textDecoration: "none" }}>
          <StyledTypography
            variant="body1"
            className={classes.text}
            style={{ marginTop: "4%" }}
          >
            Privacy Policy
          </StyledTypography>
        </Link>
        <Link to="/privacytwo" style={{ textDecoration: "none" }}>
          <StyledTypography variant="body1" className={classes.text}>
            Policy 2
          </StyledTypography>
        </Link>
      </Grid>
      <Grid item lg={3} md={3}>
        <Typography variant="h6" className={classes.text}>
          ABOUT US
        </Typography>
        <hr width="50%" align="center" size="5" style={{ margin: "auto" }} />
        <Typography
          variant="body1"
          className={classes.text}
          style={{ marginTop: "4%" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
    </StyledFooterGrid>
  );
};

export default Footer;
