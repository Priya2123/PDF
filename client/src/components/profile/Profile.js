import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./ProfileStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import pic from "../../assets/1.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import allactions from "../../redux/actions";

const Profile = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // let [prof, setProf] = useState([]);

  useEffect(() => {
    // getProf();
    dispatch(allactions.profiledata()); //action
  }, []);

  //reducer
  const data = useSelector((state) => state.getprofile);
  console.log("data in file", data);

  // let getProf = async () => {
  //   let response = await fetch("http://127.0.0.1:8000/profile/");
  //   let data = await response.json();
  //   setProf(data);
  // };

  if (data != "None") {
    return (
      <div>
        <Grid
          container
          lg={12}
          md={12}
          style={{ backgroundColor: "#f9f9f3", minHeight: "100vh" }}
        >
          <Grid item lg={1} md={1}></Grid>
          <Link to="/landing">
            <ArrowBackIcon
              style={{
                fontWeight: "bold",
                marginTop: "5vh",
                border: "1px solid black",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              className={classes.arrow}
            />
          </Link>
          <Grid item lg={5} md={5} sm={11} xs={11}>
            <Grid container style={{ marginTop: "13vh" }}>
              <Grid item>
                <Typography style={{ fontWeight: "bold" }} variant="h4">
                  {data.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={6} md={6} xs={6} sm={6}>
                <Grid container>
                  <Grid item>
                    <Typography variant="caption">Branch</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Typography variant="h6">{data.branch}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={6} md={6} xs={6} sm={6}>
                <Grid container>
                  <Grid item>
                    <Typography variant="caption">College</Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Typography variant="h6">{data.college}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container style={{ padding: "5% 0%" }} justify="center">
              <Grid item>
                <Typography variant="subtitle1">
                  about yourself Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.about yourself Lorem ipsum dolor sit amet.{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Grid container>
                  <EmojiEmotionsIcon
                    fontSize="large"
                    style={{ paddingRight: "5px" }}
                  />
                  <Grid item>
                    <Typography variant="caption">Penchant</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="h6">
                          Sleep eat sleep eat sleep eat sleep eat sleep eat
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container style={{ padding: "2% 0%" }}>
              <Grid item>
                <Grid container>
                  <LocalLibraryIcon
                    fontSize="large"
                    style={{ paddingRight: "5px" }}
                  />
                  <Grid item>
                    <Typography variant="caption">Achievements</Typography>
                    <Grid container>
                      <Grid item>
                        <Typography variant="h6">
                          Sleep eat sleep eat sleep eat sleep eat sleep eat
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2} md={2}></Grid>
          <Grid item lg={3} md={3}>
            <img src={pic} alt="" className={classes.image} />

            <Grid
              container
              lg={12}
              md={12}
              justify="flex-end"
              style={{ padding: "5px 5px" }}
              className={classes.last}
            >
              <FacebookIcon className={classes.icon} />
              <TwitterIcon className={classes.icon} />
              <LinkedInIcon className={classes.icon} />
              <InstagramIcon className={classes.icon} />
            </Grid>
          </Grid>
          <Grid item lg={1} md={1}></Grid>
        </Grid>
      </div>
    );
  } else {
    window.location.replace("/login/");
  }
};
// function mapStateToProps(state) {
//   return { profile: state.profile };
// }

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ profiledata: profiledata }, dispatch);
// }

export default Profile;
// export default connect(mapStateToProps, matchDispatchToProps)(Profile);
