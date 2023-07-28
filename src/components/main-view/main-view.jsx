import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ActivitiesCard } from "../activities-card/activities-card";
import { Row, Col } from "react-bootstrap";
import { ActivityView } from "../activity-view/activity-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { TypeView } from "../type-view/type-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState(null);

  //assign server variable
  const server = "https://city-guide-api-3d2f74a4c59e.herokuapp.com";

  //fetch all activities from api and assign them to activities state
  useEffect(() => {
    fetch(`${server}/activities`)
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
            Address: activity.Address,
          };
        });
        setActivities(activitiesFromApi);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //setUser with login
  const onLogin = (user) => {
    if (user) {
      setUser(user);
    } else {
      alert("Login was unsuccessful");
    }
  }

  //remove user with logout
  const onLogout = (user) => {
    const navigate = useNavigate();
    setUser(null);
    navigate("/");
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      <Row>
        <Routes>
          {/* route to homepage */}
          <Route
            path="/"
            element={
              <>
                <h1>Activities</h1>
                {activities.map((activity) => {
                  return (
                    <>
                      <Col
                        xs={12}
                        s={8}
                        md={4}
                        className="m-2"
                        key={activity._id}
                      >
                        <ActivitiesCard activity={activity} />
                      </Col>
                    </>
                  );
                })}
                <a target="_blank" href="https://icons8.com/icon/HH1wWvmLSFYK/pegasus">Pegasus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
              </>
            }
          />
          {/* route to activity view */}
          <Route
            path="/activities/:id"
            element={
              <>
                <ActivityView activities={activities} />
              </>
            }
          />
          {/* route to arts view */}
          <Route
            path="/activities/types/:type"
            element={
              <>
                <TypeView activities={activities} />
              </>
            }
          />
          {/* route to login */}
          <Route 
            path="/login"
            element={
              <>
                <LoginView onLogin={onLogin} server={server} />
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
