/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from "jest-cucumber";


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => { 
    test('When the user has not specified a number, 32 events are shown by default.', ({ given, when, then }) => {

        given('the user opens the app', () => {

        });


        when('the user does not specify a number in the number of event box', () => {

        });

        then('he user will see a maximum of 32 events', () => {

        });
    });

    test('The user can change the number of events displayed.', ({ given, when, then }) => {
        given('32 events as the default', () => {

        });

        when('the user specifies a number in the number of event box', () => {

        });

        then('the number will change and the user will see many events matching the number specified', () => {

        });
    });
});