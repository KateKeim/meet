
<h1>Meet App</h1>

<h2>Feature 1: Filter events by city</h2>

**Scenario 1**
When user hasn’t searched for a specific city, show upcoming events from all cities.
+ **Given** user hasn’t searched for any city;
+ **When** the user opens the app;
+ **Then** the user should see a list of upcoming events.

**Scenario 2**
User should see a list of suggestions when they search for a city.
+ **Given** the main page is open;
+ **When** user starts typing in the city textbox;
+ **Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

**Scenario 3**
User can select a city from the suggested list.
+ **Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
+ **When** the user selects a city (e.g., “Berlin, Germany”) from the list;
+ **Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

<h2>Feature 2: Show and hide events details</h2> 

>As a *User*,
I should be able to *show and hide events details*
So that I can *see and unsee details of events*

**Scenario 1** An event element is collapsed by default.
+ **Given** the list of events matching the city they´ve typed or all events down to the search box
+ **When** the user fill or does not fill the search box
+ **Then** the user will see the events matching their chosen city or all events

**Scenario 2** Users can expand an event to see details. 
+ **Given** the list of events matching the city they´ve typed or all events down to the search box with the ‘show details’ button
+ **When** the user clicks on the ‘show details’ button
+ **Then** the user will see the detail of that events

**Scenario 3** Users can collapse an event to hide details.
+ **Given** the details of the event the user clicked to show more details
+ **When** the user clicks on the ‘hide details’ button
+ **Then** the user will see the default element events


<h2>Feature 3: Specify the Number of Events</h2>

>As a User,
I should be able to specify the number of events
So that I can see the list of events in the number that I would like to see

**Scenario 1** When the user hasn’t specified a number, 32 events are shown by default. 
+ **Given** 32 events as default
+ **When** the user does not specify a number in the ‘number of event’ box
+ **Then** the user will see a maximum of 32 events

**Scenario 2** The user can change the number of events displayed.	
+ **Given** 32 events as the default
+ **When** the user specifies a number in the ‘number of event’ box
+ **Then** the number will change and the user will see many events matching the number specified


<h2>Feature 4: Use the App When Offline</h2>

>As a User,
I should be able to use the app when offline
So that I can see the responses from the app

**Scenario 1** Show cached data when there’s no internet connection. 
+ **Given** the home page is open
+ **When** the user uses the app without internet
+ **Then** the user will see the “No Internet connection” message on the screen

**Scenario 2** Show error when the user changes search settings (city, number of events).
+ **Given** the home page with a search box and a number in the event box to fill is open
+ **When** the user changes the search setting of the city or number of events without an internet connection
+ **Then** the user will see an error on the screen


<h2>Feature 5: Add an App Shortcut to the Home Screen</h2>

>As a User,
I should be able to add an app shortcut to the home screen
So that I access the app through a shortcut

**Scenario 1** The user can install the Meet app as a shortcut on their device home screen
+ **Given** the checkbox as a last step of the installation for the Meet app
+ **When** the user checks the “create shortcut to the home screen”
+ **Then** the shortcut will appear on the users´ home screen

<h2>Feature 6: Display Charts Visualizing Event Details</h2>

>As a User,
I should be able to show a chart with the number of upcoming events in each city
So that I can see the chart with the number of upcoming events in each city

**Scenario 1** Show a chart with the number of upcoming events in each city.
+ **Given** the homepage is open
+ **When** the user opens the app
+ **Then** the chart with the number of upcoming events in each city show on the screen


## Used technologies

- React


## Link to the live version

The online hosted version of this app can be found here: [Meet App](https://KateKeim.github.io/meet)
