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
      <Card className="d-flex flex-row-reverse">
        <Card.Img
          variant="top"
          src={activity.ImagePath}
          style={{ width: "60vw", height: "60vh", objectFit: "cover" }}
          className="mx-auto"
        />
        <Card.Body>
          <Card.Title>
            <h1 className="text-center p-3">{activity.Name}</h1>
          </Card.Title>
          <Card.Text>{activity.Description} </Card.Text>
          <Card.Text>{activity.Price} </Card.Text>
          <Card.Text>{activity.Address} </Card.Text>
          <Card.Text>{activity.Type} </Card.Text>
          <Link to={`/`}>
            <Button variant="primary">More activities</Button>
          </Link>
          <a href={activity.Website} target="_blank">
            <Button variant="primary">Visit website</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};
