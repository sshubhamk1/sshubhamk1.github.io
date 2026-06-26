import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import procmon from "../../assets/Projects/procmon.jpg";
import sysmon from "../../assets/Projects/sysmon.jpg";
import tuxbuild from "../../assets/Projects/tuxbuild.png";
import custom_iso from "../../assets/Projects/custom_iso.png";
import iot_malware from "../../assets/Projects/iot_malware.png";
import anwes from "../../assets/Projects/anwes.png";
import ncm from "../../assets/Projects/ncmproject.png";
import scaleai from "../../assets/Projects/scaleai.png";
import u25 from "../../assets/Projects/u25.png";
import yogic from "../../assets/Projects/yogic.png";
import tinystep from "../../assets/Projects/tinystep.png";
import shap3d from "../../assets/Projects/shap3d.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={u25}
              isBlog={false}
              isRestricted={true}
              title="Under25 - Where students earn and build"
              description="It began in 2013 by building a community of driven students, that would come together once a year. This community began to grow across the nation, both physically and digitally. Over the years, the power of our student collective has impacted brands, non-profits, governments, consumer behavior and popular culture."
              orgLink="https://under25universe.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yogic}
              isBlog={true}
              isRestricted={true}
              title="Yogic Algorithm"
              description="theyogicalgorithm.in is the official web presence for The Yogic Algorithm, a holistic wellness and therapeutic center based in Ludhiana, Punjab, India. It is spearheaded by Shivani Goyal, a recognized yoga player, researcher, and certified yoga and acupressure therapist."
              orgLink="https://theyogicalgorithm.in/"
            />
          </Col>
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={tinystep}
              isBlog={true}
              isRestricted={true}
              title="Tiny Step Pediatrics"
              description="⁠Tiny Steps Pediatrics is an online platform and pediatric consultancy focused on the healthy growth and development of infants and toddlers. It provides expert guidance, compassionate parental support, and counseling to help families navigate the early years of parenthood."
              orgLink="https://tinystepspediatrics.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shap3d}
              isBlog={true}
              isRestricted={true}
              title="Shap3d"
              description="⁠Shap3d.in is an online custom 3D printing service. It allows users to upload 3D model files (such as .STL or .OBJ), choose their preferred materials, finishes, and delivery options, and receive an instant quote for custom manufacturing"
              orgLink="https://shap3d.in/"
            />
          </Col>
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={scaleai}
              isBlog={false}
              isRestricted={true}
              title="Fine Tuning of AI models"
              description="This project involves a chatbot for virtual assistance created using large language models. The models are fine-tuned for highly optimized results using the RLHF (Reinforcement Learning with Human Feedback) technique. They are tested with a series of related questions, and the output is evaluated using SxS ratings with additional feedback to improve the models' performance."
              orgLink="https://scale.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ncm}
              isBlog={false}
              isRestricted={true}
              title="Automatic trading platform"
              description="An automated trading platform captures stock price tickers for a selected list of companies based on multiple parameters and algorithms. The engine predicts future market conditions for these companies and places trades to maximize profit."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={procmon}
              isBlog={false}
              isRestricted={true}
              title="Process Monitor"
              description="Process Monitor is an application launcher designed to automatically set up and start a 5G server. The 5G server comprises server-level applications with specific attributes and environments. If any of these applications go down, the server does not function as expected, requiring system changes before bringing it up again. The Process Monitor app ensures that all applications listed in the service_config.json file are brought up and can restart the server if any application fails. Additionally, it sends the metrics of running processes to EMS to keep the entire system synchronized."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              orgLink="https://www.radisys.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sysmon}
              isBlog={false}
              isRestricted={true}
              title="System Monitor"
              description="System Monitor is an application that monitors a server's health by tracking CPU, memory, disk, and other resource usage, sending metrics to EMS. It detects sudden surges in resource utilization, generates alarms, and forwards them to EMS. Additionally, it transfers non-active log files to a remote server to prevent the server from running out of space."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              orgLink="https://www.radisys.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tuxbuild}
              isBlog={false}
              isRestricted={true}
              title="Tuxbuild"
              description="Tuxbuild is a build tool application designed to build all 5G applications and create releases. It sets up a common isolated environment with the necessary libraries not officially supported by the operating system and applies patches to these libraries based on usage. Tuxbuild then builds all applications based on their dependencies and creates release files suitable for server deployment."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              orgLink="https://www.radisys.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={custom_iso}
              isBlog={false}
              isRestricted={true}
              title="Custom RHEL ISO"
              description="5G server system settings can be time-consuming and may result in inconsistent library versions and settings across servers. To address these issues, a custom RHEL ISO is created. This ISO includes only the necessary libraries for 5G applications and other dependent libraries, along with all custom-built libraries and binaries for 5G servers. This approach enables a plug-and-play server setup and reduces the ISO size by 72% compared to the original."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              orgLink="https://www.radisys.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot_malware}
              isBlog={false}
              isRestricted={false}
              title="Mitigation of Mirai Malware"
              description="This research proposes a Behaviour-dependent Resource-based Network-level Mitigation (BRNM) approach for Mirai malware and its variants. This hybrid method monitors IoT behavior through resources like CPU and memory utilization and running processes. It is based on the idea that malware attacks on IoT devices either kill genuine processes, create new processes, reuse existing ones, or attach malicious processes to genuine ones. The approach uses a bot application to monitor IoT device behavior, sending data to a backconnect server where processing occurs, and then updates the authorized user for corrective actions. The BRNM model is implemented in a Docker environment and tested for eight different IoT behaviors before and after malware infection."
              ghLink="https://github.com/sshubhamk1/Mirai-Solution"
              orgLink="https://www.nitk.ac.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anwes}
              isBlog={false}
              isRestricted={true}
              title="Anwes"
              description="Anwes is an end-to-end platform designed to streamline the entire interview experience for candidates. It operates as an invite-based website. Once a company selects a candidate from an external platform (such as Internshala, LinkedIn, or Indeed) for hiring, the hiring manager provides the candidate with an Anwes website profile. The candidate fills in all necessary details, and from then on, all interviews, communications, discussions, and notifications are managed via the Anwes platform. This ensures that the company has all required candidate information in a single, centralized source."
              // ghLink="https://github.com/sshubhamk1/Mirai-Solution"
              orgLink="https://think201.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
