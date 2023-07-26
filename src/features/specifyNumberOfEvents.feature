Feature: Specify the Number of Events
    Scenario: When the user has not specified a number, 32 events are shown by default.
        Given the user opens the app
        When the user does not specify a number in the number of event box
        Then he user will see a maximum of 32 events

    Scenario: The user can change the number of events displayed.
        Given 32 events as the default
        When the user specifies a number in the number of event box
        Then the number will change and the user will see many events matching the number specified