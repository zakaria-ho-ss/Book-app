import React from "react";
import { Button, Card } from "react-bootstrap";

const index = ({
  title,
  description,
  showBtn,
  handleClick,
}: CustomCardProps) => {
  return (
    <div>
      <Card className="flex" style={{ width: "100%", marginTop: "20px" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {showBtn && (
            <Button variant="primary" onClick={handleClick}>
              more ...
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default index;
