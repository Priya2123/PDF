import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Chip,
  Fade,
  Modal,
  Box,
  Backdrop,
  IconButton,
  Button,
} from "@material-ui/core";
import Avatar from "react-avatar-edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const image = {
  // [theme.breakpoints.down("sm")]: {
  //   width: "90vw",
  //   margin: "auto",
  //   marginLeft: "5vw",
  //   marginRight: "5vw",
  // },
};

const ModalProfile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [avat, setAvat] = useState(false);

  const [preview, setPreview] = useState(null);
  function onClose() {
    setPreview(null);
  }
  function handleClick() {
    setAvat(true);
  }
  function onCrop(pv) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 2000000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }
  return (
    <>
      <Grid container lg={12} md={12}>
        <Grid item lg={12} md={12} style={{ textAlign: "center" }}>
          <Chip
            label="Change Profile"
            style={{ textAlign: "center" }}
            onClick={handleOpen}
          />
        </Grid>
      </Grid>
      <Grid container lg={12} md={12}>
        <Grid item lg={12} md={12}>
          {avat ? (
            <img
              src={preview}
              style={{ height: "54vh", width: "25vw", marginTop: "5vh" }}
            />
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <Grid container lg={12} md={12} justify="center">
                <Grid item lg={6} md={6} justify="center">
                  <Avatar
                    width={200}
                    height={150}
                    onCrop={onCrop}
                    onClose={onClose}
                    onBeforeFileLoad={onBeforeFileLoad}
                    src={null}
                  />
                </Grid>
                <Grid item lg={6} md={6} justify="center">
                  {preview && (
                    <>
                      <Grid container lg={12} md={12}>
                        <Grid item lg={5} md={5}>
                          <img src={preview} alt="Preview" />
                        </Grid>

                        <Grid item lg={4} md={4} style={{ marginTop: "5vh" }}>
                          <a
                            href={preview}
                            style={{
                              fontSize: "11px",
                              color: "white",
                              backgroundColor: "gray",
                              padding: "8px 4px",
                              borderRadius: "5px",
                              textDecoration: "none",
                            }}
                            download="avatar"
                          >
                            <Typography variant="caption">
                              DOWNLOAD AVATAR
                            </Typography>
                          </a>

                          <Button
                            style={{
                              width: "7vw",
                              fontSize: "11px",
                              backgroundColor: "gray",
                              color: "white",
                              textDecoration: "none",
                              marginTop: "2vh",
                              padding: "5px 4px",
                            }}
                            onClick={handleClick}
                          >
                            <Typography variant="caption">
                              Set avatar
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>
            </div>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="h2"
            >
              Bio:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                style={{
                  border: "1px solid #bbb",
                }}
              />
              {/* <textarea name="Text1" cols="130" rows="5"></textarea> */}
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="h2"
            >
              Penchant:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                style={{
                  border: "1px solid #bbb",
                }}
              />
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="h2"
            >
              Achievements:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                style={{
                  border: "1px solid #bbb",
                }}
              />
              {/* <textarea name="Text1" cols="130" rows="5"></textarea> */}
            </Typography>

            <Grid container lg={12} md={12} justify="flex-end">
              <Grid item lg={12} md={12} justify="flex-end">
                <Chip
                  label="Submit"
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    cursor: "pointer",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalProfile;
