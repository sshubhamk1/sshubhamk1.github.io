import React from "react";
import Badge from "react-bootstrap/Badge";

function Badges(props) {
  const row = [];
  props.skills.forEach((skill, index) => {
    row.push(
      <Badge key={index} style={{ margin: "5px" }} pill bg="secondary">
        {skill}
      </Badge>
    );
  });
  return row;
}
export default Badges;
