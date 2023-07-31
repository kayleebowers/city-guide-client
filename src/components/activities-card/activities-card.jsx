import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export const ActivitiesCard = ({ activity }) => {
  return (
    <>
      <Link to={`/activities/${activity._id}`}>
        <Button>
          <Card className=" mw-80 mh-80">
            <Card.Img
              variant="top"
              src={activity.ImagePath}
              className="h-100 img-fluid"
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
