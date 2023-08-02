import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ActivitiesCard } from "../activities-card/activities-card";
import { Row, Col } from "react-bootstrap";
import { ActivityView } from "../activity-view/activity-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { TypeView } from "../type-view/type-view";
import { LoginView } from "../login-view/login-view";
import { SignUpView } from "../sign-up-view/sign-up-view";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  const [activities, setActivities] = useState([]);
  const [randomActivities, setRandomActivities] = useState([]);

  //set user and token state to local storage values as default
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

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

  //remove user with logout
  const onLogout = (user) => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  }

  //add function to randomize array
  const randomize = (list) => {
    return list.sort(() => Math.random() - 0.5);
  }

  // only randomize activities list when user changes
  useEffect(() => {
   setRandomActivities(randomize(activities));
  }, [activities]);

  return (
    <BrowserRouter>
      <NavigationBar onLogout={onLogout} user={user} />
      <Row className="mx-2">
        <Routes>
          {/* route to homepage */}
          <Route
            path="/"
            element={
              <>
                <Col className="p-5">
                  <h1 className="pb-2 text-center">Welcome to Dallas</h1>
                  <p className="text-center">Dallas, Texas, is the fourth-largest metropolitan area in the U.S. at 7.5 million people. With a 2020 census population of 1,304,379, it is the ninth-most populous city in the U.S. and the third-most populous city in Texas after Houston and San Antonio. Little wonder there is something here for everyone!</p>
                </Col>
                <h2>What to do...</h2>
                {randomActivities.map((activity) => {
                  return (
                    <>
                      <Col
                        xs={12}
                        s={8}
                        md={6}
                        lg={4}
                        className="my-3"
                        key={activity._id}
                      >
                        <ActivitiesCard activity={activity} user={user} setUser={setUser} server={server} token={token} />
                      </Col>
                    </>
                  );
                })}
                <div className="d-flex justify-content-center">
                  <a target="_blank" href="https://icons8.com/icon/HH1wWvmLSFYK/pegasus">Pegasus</a><span> icon by  </span><a target="_blank" href="https://icons8.com" >Icons8</a>
                </div>
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
                <LoginView onLogin={(user, token) => {
                  setUser(user);
                  setToken(token);
                  } 
                 } 
                 server={server}
                 user={user}
                />
              </>
            }
          />
          {/* route to sign up */}
          <Route 
            path="/users"
            element={
              <>
                <SignUpView server={server} />
              </>
            }
          />
          {/* route to profile view */}
          < Route 
            path="/users/:id"
            element={
              <>
                { !user ? (
                  <Navigate to="/login" />
                ) : (
                  <ProfileView user={user} server={server} token={token} setUser={setUser} onLogout={onLogout} activities={activities}/>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
