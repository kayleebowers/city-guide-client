import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export const ActivitiesCard = ({ activity }) => {
  return (
    <>
        <Link to={`/activities/${encodeURIComponent(activity._id)}`}>
      <Button>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={activity.ImagePath}
            className="w-40 img-fluid"
          />
          <Card.Body>
            <Card.Title>{activity.Name}</Card.Title>
            <Card.Text>{activity.Description}</Card.Text>
          </Card.Body>
        </Card>
      </Button>
      </Link>
    </>
  );
};
