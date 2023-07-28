import { useParams } from "react-router";
import { Col, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export const TypeView = ({ activities }) => {
  const { type } = useParams();
  const events = activities.filter((activity) => activity.Type === type);
  return (
    <Col >
      <Carousel style={{border: "1px solid red"}} className="w-50">
        {events.map((slide) => {
          return (
            <Carousel.Item key={slide._id}>
              <img
                className="w-100"
                src={slide.ImagePath}
                alt="slider image"
              />
              <Carousel.Caption>
                <h3>{slide.Name}</h3>
                <p>{slide.Description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Col>
  );
};
