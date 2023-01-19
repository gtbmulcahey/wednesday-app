import {render, fireEvent, screen } from "@testing-library/react"
import {RadioButtonGroup} from "./RadioButtonGroup";

test("Selecting first radio button should change button selected", () => {
    const {getByLabelText} = render(<RadioButtonGroup />);
    
    const radioButton = screen.getByLabelText(/Shape Shifter/i);
    fireEvent.click(radioButton);
    expect(radioButton.checked).toEqual(true);
});