import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./UploadStyles";
import NavUpload from "../navUpload/NavUpload";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import "./style.css";
import Fade from "react-reveal/Fade";

const Upload = () => {
  const classes = useStyles();
  const {
    register,
    errors,
    handleSubmit,
    getValues,
    // formState: { errors },
  } = useForm();
  // useForm({
  //   mode: "onChange",
  // });
  // const atLeastOne = () =>
  //   getValues("test").length ? true : "Please tell me if this is too hard.";
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);
  return (
    <div style={{ backgroundColor: "#290d44", minHeight: "100vh" }}>
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
                  Upload PDF
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label>First name</label>
                  <input
                    type="text"
                    {...register("First name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                  <label>Last name</label>
                  <input
                    type="text"
                    {...register("Last name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  <label>Email</label>
                  <input
                    type="text"
                    {...register("Email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  <label>Mobile number</label>
                  <input
                    type="tel"
                    {...register("Mobile number", {
                      required: true,
                      maxLength: 11,
                      minLength: 8,
                    })}
                  />
                  <label>College</label>
                  <input
                    type="text"
                    {...register("College", { required: true, maxLength: 500 })}
                  />
                  <label>Year</label>
                  <input
                    type="tel"
                    {...register("Year", {
                      required: true,
                      maxLength: 11,
                      minLength: 1,
                    })}
                  />
                  <label>Branch of PDF</label>
                  <input
                    type="text"
                    {...register("branch", { required: true, maxLength: 500 })}
                  />
                  <label>Subject of PDF</label>
                  <input
                    type="text"
                    {...register("subject", { required: true, maxLength: 500 })}
                  />
                  <label>Upload PDF</label>
                  <input type="file" name="pdf" style={{ color: "white" }} />
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
                  <label>Have you read all the instructions?</label>
                  {/* <input
                  key={value}
                  type="checkbox"
                  value={value}
                  {...register("test", {
                    validate: atLeastOne,
                  })}
                /> */}
                  <input
                    type="radio"
                    value="Yes"
                    {...register("read", { required: true })}
                  />
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
                  <input
                    type="radio"
                    value="No"
                    {...register("read", { required: true })}
                  />
                  <button type="reset">Submit</button>
                  {/* <input type="reset" type="submit" /> */}
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
};

export default Upload;
