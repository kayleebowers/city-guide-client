import { useParams } from "react-router";

export const ArtsView = ({activities}) => {
// const { type } = useParams();
const arts = activities.filter((activity) => activity.Type === "Arts");
console.log(arts);
return (
    <>
        <h1>{arts}</h1>
    </>
)
}