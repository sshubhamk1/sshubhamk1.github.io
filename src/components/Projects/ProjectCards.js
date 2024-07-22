import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite, CgOrganisation } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { TiWarning } from "react-icons/ti";

function ProjectCards(props) {
  const button = [];
  if (props.isRestricted) {
    button.push(
      <Button variant="danger" disabled>
        <TiWarning /> &nbsp; Restricted
      </Button>
    );
    if (props.orgLink)
      button.push(
        <Button
          variant="success"
          href={props.orgLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgOrganisation /> &nbsp; Visit Org
        </Button>
      );
  } else {
    button.push(
      <Button variant="primary" href={props.ghLink} target="_blank">
        <BsGithub /> &nbsp; Github
      </Button>
    );
    if (props.demoLink) {
      button.push(
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
      );
    }
  }
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {button}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
