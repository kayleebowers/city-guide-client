import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ActivityView = ({ activities }) => {
  //get route parameter
  const { id } = useParams();
  const activity = activities.find((activity) => activity._id === id);

  console.log(activities);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={activity.ImagePath} />
        <Card.Body>
          <Card.Title>{activity.Name} </Card.Title>
          <Card.Text>{activity.Description} </Card.Text>
          <Card.Text>{activity.Price} </Card.Text>
          <Card.Text>{activity.Address} </Card.Text>
          <Card.Text>{activity.Website} </Card.Text>
          <Card.Text>{activity.Type} </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
