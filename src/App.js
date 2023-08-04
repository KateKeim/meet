/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';

import './App.css';


export const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");


  useEffect(() => {
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      setWarningAlert("")
    } else {
      // set the warning alert message to a non-empty string
      setWarningAlert("This application is currently working offline")
    }
    fetchData();
  }, [currentCity, currentNOE, navigator.onLine]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
        <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
        <NumberOfEvents events={events} setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert}/>
        <div className="alerts-container">
          {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
          {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
          {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <div className='chart-container'>
        <EventGenresChart events={events}/>
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} currentNOE={currentNOE} />
    </div>
  );
}

export default App;