import Image from "next/image";
import "./globals.css";
import { getImageSize } from "next/dist/server/image-optimizer";

export default function Home() {
  return (
    <div className="content">
      <div className="main">
        <div className="scrollText">
          &gt;&gt; 스크롤해서 자세히 살펴보기 &lt;&lt;
        </div>
        <div className="HyeJung">
          HYEJUNG <br></br>
          PORTFOLIO
        </div>
      </div>
      <div className="aboutMeContent">
        <div className="titleAboutMe">About Me</div>
        <img src="/avatar.png" className="img" alt="Avatar" />
        </div>
    </div>
  );
}