import { useParams } from "react-router";
import { Col } from "react-bootstrap";
import { Carousel, ExampleCarouselImage } from 'react-bootstrap';

export const TypeView = ({activities}) => {
const { type } = useParams();
const events = activities.filter((activity) => activity.Type === type);
return (
    <>
        {events.map((event) => {
        return (
            <Col key={event._id}>
            <h1>{event.Name}</h1>
            </Col>
        );
    }
    )}
    </>
)
}