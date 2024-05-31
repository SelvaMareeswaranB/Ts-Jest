import { render, screen } from "@testing-library/react";
import UserAccount from "../../components/UserAccount";

describe("Test For User Account", () => {
  it("admin role provided and button should visible", () => {
    render(<UserAccount user={{ id: 1, name: "selva", isAdmin: true }} />);
    const buttonVisible=screen.queryByRole("button")
    expect(buttonVisible).toBeInTheDocument()
    expect(buttonVisible).toHaveTextContent(/edit/i)
  });

  it("admin role not provided and button should visible", () => {
    render(<UserAccount user={{ id: 2, name: "selva" }} />);
    const buttonVisible=screen.queryByRole("button")
    expect(buttonVisible).not.toBeInTheDocument()

  });

  it("must render with the given username",()=>{
    render(<UserAccount user={{ id: 1, name: "selva", isAdmin: true }}/>)
    const usernameElement = screen.queryByText("selva");
    expect(usernameElement).toBeInTheDocument();
})
});
