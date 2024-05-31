import { render, screen } from "@testing-library/react";
import SearchBox from "../../components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("Search box", () => {
  const renderComponent = () => {
    const onChangeFn = vi.fn();
    render(<SearchBox onChange={onChangeFn} />);
    return {
      input: screen.getByPlaceholderText(/search/i),
      onChange: onChangeFn,
      user: userEvent.setup(),
    };
  };
  it("Should render an input field for searching", () => {
    const { input } = renderComponent();

    expect(input).toBeInTheDocument();
  });
  it("Should Call onChange When Hit enter", async () => {
    const { user, input, onChange } = renderComponent();

    const searchTerm = "s";
    await user.type(input, searchTerm + "{enter}");
    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });
  it("Should not Call onChange When Hit enter", async () => {
    const { user, input, onChange } = renderComponent();

    await user.type(input, "{enter}");
    expect(onChange).not.toHaveBeenCalled();
  });
});
