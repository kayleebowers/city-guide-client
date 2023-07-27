import React from "react";
import { useState, useEffect } from "react";

export const MainView = () => {
    const [ activities, setActivities ] = useState([]);
    const [ user, setUser ] = useState(null);
    
    //assign server variable 
    const server = "https://city-guide-api-3d2f74a4c59e.herokuapp.com";

    fetch(`server/activities`
        .then((response) => response.json())
        .then((activities) => {
            const activitiesFromApi = activities.map((activity) => {
                return {
                    _id: activity._id,
                    Name: activity.Name,
                    Description: activity.Description,
                    Type: activity.Type,
                    ImagePath: activity.ImagePath,
                    Price: activity.Price,
                    Website: activity.Website,
                    Address: activity.Address
                };
            });
            setActivities(activitiesFromApi);
        }).catch((error) => {
            console.error(error);
        })
    );
    
  return (
    <>
      <h1>Pegasus City Guide</h1>
    </>
  );
};
