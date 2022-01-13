import React from "react";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function LandingPage() {
  return (
    <div className="landing">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Tamara Bilensky</h1>
          <h3>
            Fredericton based <span>Registered Massage Therapist</span>.
          </h3>
          <h3>description</h3>
          <hr />
          <ul className="social">
            <IconButton href="https://www.facebook.com/TamBilenskyRMT/">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/TamBilenskyRMT/">
              <InstagramIcon />
            </IconButton>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </div>
  );
}

export default LandingPage;
