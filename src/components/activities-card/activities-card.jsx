import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';

export const ActivitiesCard = ({ activity }) => {
  return (
    <>
    <div className="d-flex flex-row"> 
    <Button>
      <Card style={{ width: '30rem', border: "1px solid red" }}>
        <Card.Img variant="top" src={activity.ImagePath} className="w-40 img-fluid" />
        <Card.Body>
          <Card.Title>{activity.Name}</Card.Title>
          <Card.Text>{activity.Description}</Card.Text>
        </Card.Body>
      </Card>
      </Button>
      </div>
    </>
  );
};
