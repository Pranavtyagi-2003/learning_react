import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
    <h3>Social Follow</h3>
    <a href="https://www.youtube.com/c/CodifyProgramming/videos"
      className="youtube social">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
      <a href="https://www.facebook.com/pranav.tyagi.716/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/Pranavtyagi2003" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/_pranavtyagi_/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>

  );
}