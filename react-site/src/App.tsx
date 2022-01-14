import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="content">
      <div>
        <img src={logo} className="logo" alt="Tamara Bowser RMT" />
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <IconButton
            onClick={() =>
              window.open("https://www.facebook.com/TamBilenskyRMT/", "_blank")
            }
            aria-label="Facebook"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() =>
              window.open(
                "https://ca.linkedin.com/in/tamara-bilensky-66a642215",
                "_blank"
              )
            }
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <div>Website Under Construction</div>
    </div>
  );
}

export default App;
