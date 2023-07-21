/* eslint-disable no-use-before-define */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable no-undef */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable no-restricted-globals */
import { render } from "@testing-library/react";
import Event from '../components/Event';

const event = {
    "kind": "calendar#event",
    "etag": "\"3181161784712000\"",
    "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    "created": "2020-05-19T19:17:46.000Z",
    "updated": "2020-05-27T12:01:32.356Z",
    "summary": "Learn JavaScript",
    "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    "location": "London, UK",
    "creator": {
     "email": "fullstackwebdev@careerfoundry.com",
     "self": true
    },
    "organizer": {
     "email": "fullstackwebdev@careerfoundry.com",
     "self": true
    },
    "start": {
     "dateTime": "2020-05-19T16:00:00+02:00",
     "timeZone": "Europe/Berlin"
    },
    "end": {
     "dateTime": "2020-05-19T17:00:00+02:00",
     "timeZone": "Europe/Berlin"
    },
    "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
    "originalStartTime": {
     "dateTime": "2020-05-19T16:00:00+02:00",
     "timeZone": "Europe/Berlin"
    },
    "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
    "sequence": 0,
    "reminders": {
     "useDefault": true
    },
    "eventType": "default"
   };

describe('<EventList /> component', () => {
    let EventComponent;
    beforeEach(() => {
      EventComponent = render(<Event />);
    })

    test('render name of events', () => {
        expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
    });

    test('render event start time', () => {
        expect(EventComponent.queryByText(event.start.dateTime)).toBeInTheDocument();
    });
   
    test('reders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });
   
    test('by default, event´s details section should be hidden)', () => {
        const showDetails = EventComponent.queryByText(event.summary);
        expect(showDetails).not.toBeInTheDocument();
    });

    test('shows the details section when the user clicks on the "show details" button', async () => {
        const user = userEvent.setup();
        const showButton = EventComponent.queryById('showButton');
        await user.click(showButton);
        const showDetails = EventComponent.queryByText(event.summary);
        expect(showDetails).toBeInTheDocument();
        expect(showDetails).toHaveClass('details');
    });

    test('hides the details section when the user clicks on the "hide details" button', async () => {
        const user = userEvent.setup();
        const hideButton = EventComponent.queryById('hideButton');
        await user.click(hideButton);
        const showDetails = EventComponent.queryByText(event.summary);
        expect(showDetails).not.toBeInTheDocument();
        expect(showDetails).toHaveClass('details');
    })
   });