import { useParams } from "react-router";

export const ActivityView = ({ activities}) => {
    const { _id } = useParams();
    let activity = activities.find((activity) => { activities._id === _id });

    return (
        <>
            <p>{activity.name}</p>
        </>
    )
}