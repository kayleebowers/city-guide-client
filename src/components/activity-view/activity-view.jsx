import { useParams } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Map from "../../img/map-icon.png";

export const ActivityView = ({ activities }) => {
  //get route parameter
  const { id } = useParams();
  const activity = activities.find((activity) => activity._id === id);

  return (
    <>
      <Card className="d-flex flex-row-reverse border-primary">
        <Card.Img
          variant="top"
          src={activity.ImagePath}
          style={{ width: "60vw", height: "60vh", objectFit: "cover" }}
          className="mx-auto"
        />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title>
            <h1 className="text-center pt-3">{activity.Name}</h1>
            <div className="d-flex justify-content-center p-1 mb-3">
              <Badge bg="primary">{activity.Type}</Badge>
              <Badge bg="primary" className="mx-2">{activity.Price}</Badge>
            </div>
          </Card.Title>
          <Card.Text>{activity.Description} </Card.Text>
          <Card.Text>
            <img src={Map} alt="map icon"/>
            <span className="mx-3">{activity.Address}</span> 
          </Card.Text>
          <div className="d-flex justify-content-center m-2">
            <Link to={`/`}>
              <Button variant="primary" className="mx-2">More activities</Button>
            </Link>
            <a href={activity.Website} target="_blank">
              <Button variant="primary">Visit website</Button>
            </a>
          </div>
        </Card.Body>
      </Card>
      <div>
        <a target="_blank" href="https://icons8.com/icon/oezvZc5uGEeS/map">Map</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
};
