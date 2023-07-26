Feature: Show and hide event details
    Scenario: An event element is collapsed by default.
        Given the list of events matching the city they´ve typed or all events down to the search box
        When the user fill or does not fill the search box
        Then the user will see the events matching their chosen city or all events

    Scenario: Users can expand an event to see details.
        Given the list of events matching the city they´ve typed or all events down to the search box with the ‘show details’ button
        When the user clicks on the ‘show details’ button
        Then the user will see the detail of that events

    Scenario: Users can collapse an event to hide details.
        Given the details of the event the user clicked to show more details
        When  the user clicks on the ‘hide details’ button
        Then the user will see the default element events


