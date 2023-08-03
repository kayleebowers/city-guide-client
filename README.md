# city-guide-client

## Project Description
Pegasus City Guide is a Single Page Application (SPA) built with React that allows users to learn about available activities in Dallas, Texas. The project relies on the [City Guide's RESTful API](https://github.com/kayleebowers/city-guide-api) to access the information stored in a MongoDB collection. 

### Key Features
* Any user can view a list of all activities, randomized each time the page reloads
* Users can click on an activity name to view more information
* Users can access different app views via the navigation bar
* Users can view activities by type (arts, restaurants, outdoors, date night) by selecting an option from "Explore the City" in the navigation bar
* Users can register for an account to track activities they have done or wish to do
* On login, users can add or remove any activity from their Todo and/or Memories list
* Registered users can update their account information
* Registered users can delete their accounts
* Registered users can view carousels displaying their Todo and Memories Lists in the Profile view
* Registered users can log in and out

## Get the App Running

The application is hosted on Netlify and can be [viewed there](https://pegasus-city-guide.netlify.app/). To view the app locally, clone the files and run the command `npx parcel src/index.html`.

## Dependencies
* Bootstrap
* React
* React-Bootstrap
* React-Dom
* React-Router

## Screenshots
## Homepage view with and without registered user
[![Homepage.png](https://i.postimg.cc/X78Mmq4t/Homepage.png)](https://postimg.cc/svv0ZVBJ)
[![Logged-In-Homepage.png](https://i.postimg.cc/9f9L3gyz/Logged-In-Homepage.png)](https://postimg.cc/HJpwX2ZC)

## Single activity view
[![Activity-view.png](https://i.postimg.cc/pTq83Kcp/Activity-view.png)](https://postimg.cc/1nVfqVQQ)

## User profile view with Todo and Memories list 
[![Profile-information.png](https://i.postimg.cc/sfb9z4Dh/Profile-information.png)](https://postimg.cc/c6M8MY3x)
[![User-todos-and-memories.png](https://i.postimg.cc/vmpHTT13/User-todos-and-memories.png)](https://postimg.cc/hJ1q3S1d)

## Activity type view
[![Type-view.png](https://i.postimg.cc/vTGyxVGL/Type-view.png)](https://postimg.cc/zb2693bV)
