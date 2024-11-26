import localFont from "next/font/local";
import "./globals.css";
import { Children } from "react";

export default function topBar ({ Children }) {
  return (
    <html>
      <body>
        <div className="topBar">
          <div className="frontend">Frontend Developer</div>
          <div className="folder">
            <div className="aboutMe">About Me</div>
            <div className="skills">Skills</div>
            <div className="project">Project</div>
            <div className="contact">Contact</div>
          </div>
        </div>
        {Children}
      </body>
    </html>
  )
}