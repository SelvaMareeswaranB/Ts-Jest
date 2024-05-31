import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";
import { User } from "../../entities";

describe("testing userlist component", () => {
  it("should render no user message if empty array passed", () => {
    render(<UserList users={[]} />);
    const message = screen.getByText(/no users/i);
    expect(message).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "selva" },
      { id: 2, name: "selvaaa" },
    ];
    render(<UserList users={users} />);
    users.forEach((user) => {
      const link=screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href',`/users/${user.id}`)
    });
  });
});
