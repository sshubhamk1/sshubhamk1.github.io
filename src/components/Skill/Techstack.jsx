import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiDjango,
} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiRedis,
  SiPostgresql,
  SiExpress,
  SiMysql,
  SiApachecassandra,
  SiGooglecloud,
  SiCelery,
  SiFastapi,
  SiApachekafka,
  SiElasticsearch,
  SiLangchain,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Django">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Celery">
        <SiCelery />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redis">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="ElasticSearch">
        <SiElasticsearch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Langchain">
        <SiLangchain />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="FastAPI">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kafka">
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Cassandra">
        <SiApachecassandra />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
        <SiGooglecloud />
      </Col>
      
    </Row>
  );
}

export default Techstack;
