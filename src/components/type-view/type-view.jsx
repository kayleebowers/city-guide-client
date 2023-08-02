import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export const TypeView = ({ activities }) => {
  const { type } = useParams();
  const events = activities.filter((activity) => activity.Type === type);
  return (
    <Col lg={12} md={12} sm={10} >
      <h1 className="p-5 mt-2 text-center">{type}</h1>
      <Carousel className="w-100" style={{height: "75vh"}}>
        {events.map((slide) => {
          return (
            <Carousel.Item key={slide._id} style={{height: "75vh"}}>
            <Link to={`/activities/${slide._id}`}>
              <img
                className="mh-10"
                src={slide.ImagePath}
                alt="slider image"
                style={{ height: "75vh", width: "100%", objectFit: "cover"}}
              />
              <Carousel.Caption>
                <h3 className="bg-primary">{slide.Name}</h3>
              </Carousel.Caption>
              </Link>

            </Carousel.Item>
          );
        })}
      </Carousel>
    </Col>
  );
};
