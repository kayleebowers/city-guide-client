import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ActivityView = ({ activities }) => {
  //get route parameter
  const { id } = useParams();
  const activity = activities.find((activity) => activity._id === id);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={activity.ImagePath} />
        <Card.Body>
          <Card.Title>{activity.Name} </Card.Title>
          <Card.Text>{activity.Description} </Card.Text>
          <Card.Text>{activity.Price} </Card.Text>
          <Card.Text>{activity.Address} </Card.Text>
          <Card.Text>{activity.Type} </Card.Text>
          <Link to={`/`}>
            <Button variant="primary">Back</Button>
          </Link>
          <a href={activity.Website} target="_blank">
            <Button variant="primary">Visit website</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};
