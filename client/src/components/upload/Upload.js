import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./UploadStyles";
import NavUpload from "../navUpload/NavUpload";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import "./style.css";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import Footer from "../footer/Footer";
import { Styleddiv, StyledPaper } from "../../toggle/StyledComponents";

const Upload = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    register,
    errors,

    getValues,
    // formState: { errors },
  } = useForm();

  let [name, setName] = useState([]);
  let [descrip, setDescrip] = useState([]);
  let [branch, setBranch] = useState([]);
  let [year, setYear] = useState([]);
  let [college, setCollege] = useState([]);
  let [subj, setSubj] = useState([]);
  let [file, setFile] = useState([null]);
  // useForm({
  //   mode: "onChange",
  // });
  // const atLeastOne = () =>
  //   getValues("test").length ? true : "Please tell me if this is too hard.";

  let [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  let getUser = async () => {
    let response = await fetch("http://127.0.0.1:8000/login/");
    let data = await response.json();
    setUser(data);
  };

  let [status, setStatus] = useState([]);

  useEffect(() => {
    getStatus();
  }, []);

  let getStatus = async () => {
    let response = await fetch("http://127.0.0.1:8000/upload/");
    let data = await response.json();
    setStatus(data);
  };

  if (status == "created") {
    window.location.replace("/download/");
  }
  if (user == "None") {
    window.location.replace("/login/");
  }

  let sendPost = async () => {
    if (status == "Done") {
      window.location.replace("/download/");
    }

    var bdata = new FormData();
    var pdfdata = document.querySelector('input[type="file"]').files[0];
    bdata.append("data", pdfdata);
    let item = { name, descrip, branch, year, subj, college, bdata };
    await fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",

      body: JSON.stringify(item),
    });
  };

  let handleSubmit = () => {
    sendPost();
  };

  console.log(errors);
  return (
    <Styleddiv style={{ minHeight: "100vh" }}>
      <NavUpload />
      <Fade left>
        <Grid container>
          <Grid item lg={12} md={12}>
            <Grid container justify="center">
              <Grid
                item
                lg={12}
                md={12}
                justify="center"
                className={classes.main}
                style={{ textAlign: "center" }}
              >
                <Typography className={classes.heading} variant="h4">
                  {t("upload_page")}
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid
                item
                lg={8}
                md={8}
                xs={11}
                sm={11}
                justify="center"
                className={classes.form}
              >
                <form encType="multipart/form-data" onSubmit={sendPost}>
                  <label>PDF name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Description</label>
                  <input
                    type="text"
                    value={descrip}
                    onChange={(e) => setDescrip(e.target.value)}
                  />

                  <label>College</label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  />
                  <label>{t("upload_page_year")}</label>
                  <input
                    type="tel"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <label>{t("upload_page_branch_of_pdf")}</label>
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  />
                  <label>{t("upload_page_subject_of_pdf")}</label>
                  <input
                    type="text"
                    value={subj}
                    onChange={(e) => setSubj(e.target.value)}
                  />
                  <label>{t("upload_page")}</label>
                  <input type="file" name="pdf" style={{ color: "black" }} />

                  {/* <label>Title</label>
                <select
                  name="Title"
                  {...register('Title" {...register({ required: true })}', {
                    required: true,
                  })}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select> */}
                  {/* <input
                  key={value}
                  type="checkbox"
                  value={value}
                  {...register("test", {
                    validate: atLeastOne,
                  })}
                /> */}

                  {/* <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="radio"
                    value="Yes"
                    {...register("read", { required: true })}
                  />
                  <label
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Yes
                  </label>
                </div> */}

                  <button type="reset" onClick={sendPost}>
                    Submit
                  </button>

                  {/* <input type="reset" type="submit" /> */}
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
      <Footer />
    </Styleddiv>
  );
};

export default Upload;
