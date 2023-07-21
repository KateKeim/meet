/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-undef */

    let numberOfEventComponent;

    test('renders text input', () => {
      const numberOfTextBox = numberOfEventComponent.queryByRole('textbox');
      expect(numberOfTextBox).toBeInTheDocument();
      expect(numberOfTextBox).toHaveClass('city');
    });
  
    test('by default, event´s details section should be number 32)', () => {
        const NumberOfEvent = numberOfEventComponent.queryByLabel('Enter number of events');
        expect(NumberOfEvent).toHaveValue('32');
    });

    test('value of number of event change correctly', async () => {
        const user = userEvent.setup();

        const numberOfTextBox = numberOfEventComponent.queryByRole('textbox');
        await user.type(numberOfTextBox, '{backspace}{backspace}10');
    })