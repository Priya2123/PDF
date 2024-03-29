import React from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import faq from "../../assets/faq.png";
import { useStyles } from "./FaqStyles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Faq = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      lg={12}
      md={12}
      justify="center"
      style={{
        backgroundColor: "lavender",
        minHeight: "100vh",
        color: "purple",
        paddingBottom: "25vh",
      }}
    >
      <Link to="/landing">
        <ArrowBackIcon
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            position: "absolute",
            // marginLeft: "-13vw",
            top: "2%",
            left: "3%",
            border: "1px solid black",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": { cursor: "pointer" },
          }}
        />
      </Link>

      <Grid item lg={12} md={12} justify="center">
        <img src={faq} alt="" className={classes.png} />
        <Typography
          variant="h4"
          style={{ padding: "4% 0 0 0", textAlign: "center" }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid
          container
          lg={12}
          md={12}
          justifyContent="center"
          style={{ paddingTop: "2%" }}
        >
          <Grid item lg={8} md={8} justify="center">
            <Typography variant="h5" style={{ marginBottom: "0.5%" }}>
              <GroupWorkIcon /> Basic
            </Typography>
            <Accordion style={{ backgroundColor: "purple" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "lavender" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "lavender" }}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "lavender" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: "purple" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "lavender" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "lavender" }}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "lavender" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: "purple" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "lavender" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "lavender" }}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "lavender" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        <Grid
          container
          lg={12}
          md={12}
          justifyContent="center"
          style={{ paddingTop: "2%" }}
        >
          <Grid item lg={8} md={8} justify="center">
            <Typography variant="h5" style={{ marginBottom: "0.5%" }}>
              <DownloadIcon /> Download
            </Typography>
            <Accordion style={{ backgroundColor: "purple" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "lavender" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "lavender" }}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "lavender" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: "purple" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "lavender" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "lavender" }}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "lavender" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        <Grid
          container
          lg={12}
          md={12}
          justifyContent="center"
          style={{ paddingTop: "2%" }}
        >
          <Grid item lg={8} md={8} justify="center">
            <Typography variant="h5" style={{ marginBottom: "0.5%" }}>
              <FileUploadIcon /> Upload
            </Typography>
            <Accordion style={{ backgroundColor: "purple" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "lavender" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "lavender" }}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "lavender" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: "purple" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "lavender" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "lavender" }}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "lavender" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: "purple" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "lavender" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: "lavender" }}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "lavender" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Faq;
