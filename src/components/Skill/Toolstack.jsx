import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  // SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiNginx,
} from "react-icons/si";
import { FaGitAlt, FaDocker } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="MacOS">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <FaGitAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Nginx">
        <SiNginx />
      </Col>
    </Row>
  );
}

export default Toolstack;
