import { useParams } from "react-router";
import { Col } from "react-bootstrap";

export const ArtsView = ({activities}) => {
// const { type } = useParams();
const arts = activities.filter((activity) => activity.Type === "Arts");
console.log(arts);
return (
    <>
        {arts.map((art) => {
        return (
            <Col key={art._id}>
            <h1>{art.Name}</h1>
            </Col>
        );
    }
    )}
    </>
)
}