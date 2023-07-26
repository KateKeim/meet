import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

/*---------------------------------------------------- SCENARIO 1 ---------------------------------------------------------*/
defineFeature(feature, test => { 
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the list of events matching the city they´ve typed or all events down to the search box', () => {

        });

        when('the user fill or does not fill the search box', () => {

        });

        then('the user will see the events matching their chosen city or all events', () => {

        });
    });

    /*---------------------------------------------------- SCENARIO 2 ---------------------------------------------------------*/
    test('Users can expand an event to see details.', ({ given, when, then }) => {
        given('the list of events matching the city they´ve typed or all events down to the search box with the ‘show details’ button', () => {

        });

        when('the user clicks on the ‘show details’ button', () => {

        });

        then('the user will see the detail of that events', () => {

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