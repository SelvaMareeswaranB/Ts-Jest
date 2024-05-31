import { render, screen } from "@testing-library/react";
import ExpandableText from "../../components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("Expandable Text", () => {
  const limit = 255;
  const longText = "a".repeat(limit + 1);
  const truncated = longText.substring(0, 255) + "...";

  const renderComponent = (headingInput: string, truncated: string) => {
    render(<ExpandableText text={headingInput} />);

    return {
      heading: screen.getByText(truncated),
      button: screen.queryByRole("button"),
    };
  };

  const renderButoon = (input: string) => {
    render(<ExpandableText text={input} />);

    return {
      button: screen.getByRole("button"),
    };
  };

  it("Should render the full text if length is less than 255", () => {
    const { button } = renderComponent("demo text", "demo text");

    expect(button).not.toBeInTheDocument();
  });

  it("Should render the truncated text if length is greater than than 255", async () => {
    const { button } = renderComponent(longText, truncated);

    expect(button).toHaveTextContent(/more/i);
  });

  it("Should render the entire text if the show more button is clicked", async () => {
    const { button } = renderButoon(longText);
    const user = userEvent.setup();
    await user.click(button);

    expect(button).toHaveTextContent(/less/i);

    const textContent = screen.getByText(longText);
    expect(textContent).toBeInTheDocument();
  });

  it("Should render the truncated text if the show less button is clicked", async () => {
    const { button } = renderButoon(longText);

    expect(button).toHaveTextContent(/more/i);

    const user = userEvent.setup();
    await user.click(button);

    const textContent = screen.getByText(longText);
    expect(textContent).toBeInTheDocument();
  });
});
