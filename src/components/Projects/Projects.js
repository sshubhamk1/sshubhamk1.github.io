import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import procmon from "../../Assets/Projects/procmon.jpg";
import sysmon from "../../Assets/Projects/sysmon.jpg";
import tuxbuild from "../../Assets/Projects/tuxbuild.png";
import custom_iso from "../../Assets/Projects/custom_iso.png";
import iot_malware from "../../Assets/Projects/iot_malware.png";

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
              orgLink="https://www.radisys.com"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
