import React from "react";
import Card from "react-bootstrap/Card";
import Badges from "./Badges";
function CompanyCard(props) {
  const description = [];
  if (props.description)
    props.description.forEach((element) =>
      description.push(<li style={{ textAlign: "left" }}>{element}</li>)
    );
  return (
    <>
      <Card.Header style={{ backgroundColor: "rgb(160, 32, 240)" }}>
        {props.name}, {props.location}
      </Card.Header>
      <Card.Body style={{ backgroundColor: "black" }}>
        <Card.Title>{props.desg}</Card.Title>
        <Card.Text>
          <ul>{description}</ul>
          <br />
          <Badges skills={props.skillset} />
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </>
  );
}
export default CompanyCard;
