import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Roll from "react-reveal/Roll";

const Footer = () => {
  return (
    <div id="about">
      <h5>Contact Me</h5>
      <ul className="social">
        <Roll left>
          <li>
            <a
              href="https://www.linkedin.com/in/pranay-burra-3b55731aa/"
              target="blank"
            >
              <LinkedInIcon />
            </a>
          </li>
        </Roll>
        <Roll left>
          <li>
            <a href="https://www.instagram.com/prannuhh/" target="blank">
              <InstagramIcon />
            </a>
          </li>
        </Roll>
        <Roll left>
          <li>
            <a href="https://mobile.twitter.com/pranay_burra" target="blank">
              <TwitterIcon />
            </a>
          </li>
        </Roll>
        <Roll left>
          <li>
            <a href="https://github.com/pranaypr6" target="blank">
              <GitHubIcon />
            </a>
          </li>
        </Roll>
      </ul>
    </div>
  );
};

export default Footer;
