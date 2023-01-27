import React from "react";
import "./css/Hero.css";
import avatar from "./assets/avatar.png";

const Hero = () => {
  return (
    <div className="banner text-center">
      <image src={avatar} className="rounded-circle shadow-sm" style={{ width: "200px" }} />
      <h1 className="display-6 mt-5">
        Zakariya <span className="feb">Febriansah</span>
      </h1>
      <p className="lead">Back-End Engineer | Student</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          id="about"
          fill="#fff"
          fill-opacity="1"
          d="M0,192L26.7,170.7C53.3,149,107,107,160,96C213.3,85,267,107,320,133.3C373.3,160,427,192,480,181.3C533.3,171,587,117,640,117.3C693.3,117,747,171,800,208C853.3,245,907,267,960,266.7C1013.3,267,1067,245,1120,229.3C1173.3,213,1227,203,1280,197.3C1333.3,192,1387,192,1413,192L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
