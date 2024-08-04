import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vuchi Venkata Sri Sai Charan</span> from
              <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently working as a FrontEnd Developer at Coderz Vision Technology.
            <br />
            I have completed  B.E Computer Science and Engineering at Vels University,Chennai
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(126 172 130)" }}>
            "Opportunities can come in many forms, so it's important to stay alert and make the most of them !"{" "}
          </p>
          <footer className="blockquote-footer">CHARAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
