/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable no-undef */
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from '@testing-library/react';
import { userEvent } from "@testing-library/user-event";


import { App } from '../App'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

/*---------------------------------------------------- SCENARIO 1 ---------------------------------------------------------*/
defineFeature(feature, test => { 
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the list of events matching the city they´ve typed or all events down to the search box', () => {

        });

        let AppComponent;
        let AppDOM;
        let EventListDOM
        when('the user fill or does not fill the search box', () => {
                AppComponent = render(<App />);
                AppDOM = AppComponent.container.firstChild;
                EventListDOM = AppDOM.querySelector('#event-list')
        });

        then('the user will see the events matching their chosen city or all events', async () => {
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem')
                expect(EventListItems.length).toBe(32);

                const eventDetails = EventListDOM.querySelector('.show-details');
                expect(eventDetails).not.toBeInTheDocument();
            })
        });
    });

    /*---------------------------------------------------- SCENARIO 2 ---------------------------------------------------------*/
    test('Users can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the list of events matching the city they´ve typed or all events down to the search box with the ‘show details’ button', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
        });

        // let EventListItems;
        // let showDetailsButton;
        when('the user clicks on the ‘show details’ button', async () => {
            // const user = userEvent.setup();

            // await waitFor(() => {
            //     EventListItems = within(EventListDOM).queryAllByRole('listitem')
            //     expect(EventListItems.length).toBe(32)
            // })
            
            // showDetailsButton = within(EventListItems[0]).queryByText('show details')
            // await user.click(showDetailsButton);
        });

        then('the user will see the detail of that events', () => {
            // const detailedEvent = EventListDOM.querySelector('.show-details')
            // expect(detailedEvent).toBeInTheDocument();
        });
    });

/*---------------------------------------------------- SCENARIO 3 ---------------------------------------------------------*/
    test('Users can collapse an event to hide details.', ({ given, when, then }) => {
        given('the details of the event the user clicked to show more details', () => {

        });

        when('the user clicks on the ‘hide details’ button', () => {

        });

        then('the user will see the default element events', () => {

        });
    });
});