import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-head">
        <h2>SPP</h2>
        <p>Solar Power Philippines</p>
      </div>

      <div className="about-text space">
        <p>
          Solar Power Philippines is a platform created to visually demonstrate
          the number of people who are using solar power. This helps to promote
          the use of solar power and increase awareness of its benefits as a
          renewable energy source.
        </p>
        <p>
          This platform is accessible to everyone and not limited to any
          specific group. It is open for public consumption and available for
          anyone interested in solar power.
        </p>
      </div>

      <div>
        <p>Maintained by: A member of Solar Power Philippines</p>
      </div>

      <div className="btn">
        <p>Please email of any concern</p>
        <a href="mailto:spup2021@gmail.com?subject=Mail from Our Site">
          Send mail
        </a>
      </div>

      <div className="space">
        <p>
          For security reasons, please avoid using your actual email password
          and create a new one instead.
        </p>
        <p>
          Rest assured that all passwords are being encrypted or hashed on this
          platform. As the developer, I will not be able to access your personal
          information.
        </p>
      </div>

      <div className="btn">
        <Link to="/">Map</Link>
      </div>

      <footer>
        <p>Solar Power Philippines license: MIT 2021</p>
      </footer>
    </section>
  );
};

export default About;
