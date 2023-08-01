import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export const TypeView = ({ activities }) => {
  const { type } = useParams();
  const events = activities.filter((activity) => activity.Type === type);
  return (
    <Col style={{border: "1px solid red"}} >
      <Carousel style={{border: "1px solid red"}} className="w-100">
        {events.map((slide) => {
          return (
            <Carousel.Item key={slide._id}>
            <Link to={`/activities/${slide._id}`}>
              <img
                className="mh-10"
                src={slide.ImagePath}
                alt="slider image"
                style={{ height: "60vh", width: "100%", objectFit: "cover"}}
              />
              <Carousel.Caption>
                <h3>{slide.Name}</h3>
              </Carousel.Caption>
              </Link>

            </Carousel.Item>
          );
        })}
      </Carousel>
    </Col>
  );
};
