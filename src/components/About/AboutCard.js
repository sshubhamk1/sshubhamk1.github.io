import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Kumar </span>
            from <span className="purple"> Sitmarhi, Bihar, India.</span>
            <br />
            I am currently employed as a software engineer at Scale AI.
            <br />
            I have completed M.Tech (Research) in Computer Science &amp;
            Engineering - Information Security at NITK Surathkal.
            <br />
            <br />
            Apart from my work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Call of Duty, Chess)
            </li>
            <li className="about-activity">
              <ImPointRight />
              Playing Capture The Flag Event
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is a journey, not a destination. The doing is often more
            important than the outcome."{" "}
          </p>
          <footer className="blockquote-footer">Arthur Ashe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
