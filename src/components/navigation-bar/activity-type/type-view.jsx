import { useParams } from "react-router";
import { Col } from "react-bootstrap";

export const ArtsView = ({activities}) => {
const { type } = useParams();
console.log(type);
const events = activities.filter((activity) => activity.Type === type);
console.log(events);
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