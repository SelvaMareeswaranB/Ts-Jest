import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms And Conditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);
    return {
      heading: screen.getByRole("heading"),
      button: screen.getByRole("button"),
      checkbox: screen.getByRole("checkbox"),
    };
  };
  it("should render with correct text and correct initial state", () => {

    const { heading, button, checkbox } = renderComponent();
    expect(heading).toHaveTextContent("Terms & Conditions");

    expect(checkbox).not.toBeChecked();

    expect(button).toHaveTextContent(/submit/i);
    expect(button).toBeDisabled();
  });

  it("should test the click button", async () => {

    const { button, checkbox } = renderComponent();


    const user = userEvent.setup();
    await user.click(checkbox);
    expect(button).toBeEnabled();
  });
});
