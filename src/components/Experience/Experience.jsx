import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaIndustry } from "react-icons/fa";
import CompanyCard from "./CompanyCard";

function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience </strong>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="09/2024 - Present"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaIndustry />}
          >
            <CompanyCard
              name="Collective Artists Network"
              desg="Senior Backend Engineer"
              location="7th Floor Lexington Tower Tavarekere, Bangalore, India"
              skillset={[
                "Django Rest Framework",
                "Wagtail",
                "Pytorch",
                "Pandas",
                "Postgres",
                "Redis",
              ]}
              description={[
                "Implemented Card Recommendation System using Deep learning",
                "Created RBAC system for proper security of data among different roles",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="03/2024 - 08/2024"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaIndustry />}
          >
            <CompanyCard
              name="Scale AI"
              desg="Software Engineer"
              location="San Francisco, California, United States (Remote)"
              skillset={[
                "Python",
                "Numpy",
                "Pandas",
                "Matplotlib",
                "scikit-learn",
                "Javscript",
              ]}
              description={[
                "Evaluated and provided justifications to a prompt and two generated model responses using SxS ratings",
                "Fine tuning AI model to breakdown a request and build up a solution using RLHF technique",
                "Evaluated the ability of large language models to call API tools like google_maps and google_search to answer userprompts.",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="11/2023 - 02/2024"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaIndustry />}
          >
            <CompanyCard
              name="Techstat dynamics pvt limited"
              desg="Software Engineer"
              location="Ludhiana, Punjab"
              skillset={[
                "Python",
                "Django",
                "Docker",
                "Nginx",
                "Javascript",
                "React.js",
                "Redis",
                "PostgreSQL",
                "Microservices architecture",
                "Grafana",
              ]}
              description={[
                "Created Microservice based architecture for the whole platform.",
                "Created React.js based fronted for the dashboard of the application",
                "Integrated Redis based pub-sub service for communication between services",
                "Implemented websocket communcation between dashboard and collector for receiving massive data from broker",
                "Added cronjobs services to take weekly backup of all data and push to S3 bucket",
                "Integrated grafana for log monitoring of all services",
                "Implemented mailer system to send alerts directly as email",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="01/2023 - 11/2023"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaIndustry />}
          >
            <CompanyCard
              name="Radisys Coorporation"
              desg="Senior Software Engineer"
              location="Bangalore, India"
              skillset={[
                "C++",
                "Python",
                "Docker",
                "RedHat",
                "Design Patterns",
                "High Level Design",
              ]}
              description={[
                "Added parallel shutdown feature in process monitor to stop the server in 70% less time.",
                "Created RHEL custom ISO 72% smaller then the original one.",
                "Added optimized way of freeing up resource for faster bringup of L1 application",
                "Added new feature to system monitor to add sufficient debug information from generated core files for debugging purpose",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="07/2021 - 12/2022"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaIndustry />}
          >
            <CompanyCard
              name="Radisys Coorporation"
              desg="Software Engineer"
              location="Bangalore, India"
              skillset={[
                "C++",
                "Python",
                "Bash",
                "CentOS",
                "Jenkins",
                "Object Oriented Programming",
              ]}
              description={[
                "Worked on Process Monitor: An application launcher to set up and start 5g server automatically.",
                "Worked on System Monitor: An application to measure the server health and send its statistics to the EMS.",
                "Worked on Tuxbuild: An automated build system to integrate and build all 5g apps by optimzing the common libraries",
                "Worked on addition of new automated features on CentOS",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="12/2020 - 12/2021"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaIndustry />}
          >
            <CompanyCard
              name="NITK Surathkal"
              desg="Research Scholar"
              location="Karnataka, India"
              skillset={[
                "Python",
                "Django",
                "React.js",
                "Node.js",
                "Golang",
                "Malware Research",
                "IoT",
                "C",
              ]}
              description={[
                "Research on Mirai Malware",
                "Understanding the Mirai Malware and it's working",
                "Host Mirai Malware in an Isolated environment to see its propagation and effect on IoT device",
                "Creation of a solution for IoT device which protects them from Mirai Malware and other malware derived from it.",
                "Testing of solution in the Isolated environment",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(160, 32, 240)" }}
            date="09/2020 - 11/2020"
            iconStyle={{ background: "rgb(160, 32, 240)", color: "#fff" }}
            icon={<FaIndustry />}
          >
            <CompanyCard
              name="Think201"
              desg="Software Engineer Intern"
              location="Bangalore, India (Remote)"
              skillset={[
                "Typescript",
                "Node.js",
                "PostgreSQL",
                "Postman",
                "MongoDB",
                "REST API",
              ]}
              description={[
                "Learned building web applications using Node.js Technology",
                "Understanding the requirements for a website from the specifications and designs for creating its backend server.",
                "designing API and Models for database",
                " Implementation of API and Models",
                "Testing of the created backend server.",
              ]}
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;
