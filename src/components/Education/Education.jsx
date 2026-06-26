import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";

function Education() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Education </strong>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="2019 - 2022"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              M.Tech (Research)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              NITK, Surathkal
            </h4>
            <p>Computer Science &amp; Engineering - Information Security</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="2015 - 2019"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">LPU, Punjab</h4>
            <p>Computer Science &amp; Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="2012 - 2014"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Secondary Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              PT. D.D.U.M College, Bairgania
            </h4>
            <p>Science</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="2011 - 2012"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Jesus &amp; Mary Academy, Darbhanga
            </h4>
            {/* <p>Computer Science &amp; Engineering</p> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Education;
