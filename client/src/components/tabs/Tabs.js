import * as React from "react";
import PropTypes from "prop-types";
import { Grid, Tabs, Tab, Typography, Box } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container style={{ backgroundColor: "lavender" }} justify="center">
      <Grid item lg={12} md={12} justify="center">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="secondary tabs example"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Unanswered Questions" {...a11yProps(1)} />
              <Tab label="Answered Questions" {...a11yProps(2)} />
              <Tab label="Ask" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            All
          </TabPanel>
          <TabPanel value={value} index={1}>
            Unanswered Questions
          </TabPanel>
          <TabPanel value={value} index={2}>
            Answered Questions
          </TabPanel>
          <TabPanel value={value} index={3}>
            Ask
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}
