import { render, screen, waitFor } from "@testing-library/react";
import PlaygroundPage from "../../pages/PlaygroundPage";
import userEvent from "@testing-library/user-event";
import ToastDemo from "../../components/ToastDemo";
import { Toaster } from "react-hot-toast";

describe("Toast", () => {
  const renderFunction = () => {
    render(<>
    <ToastDemo/>
    <Toaster/>
    </>);

    return {
      button: screen.getByRole("button"),
      user: userEvent.setup(),
    };
  };
  it("button should render on the screen", () => {
    const { button } = renderFunction();
    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent(/toast/i);
  });

  it("button clicked toast should appear",async() => {
    const { button, user } = renderFunction();

    await  user.click(button);
    waitFor(() => {
      const alert = screen.getByRole("alert");
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent(/success/i)
    });
  });
});
