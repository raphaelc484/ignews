import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { useSession } from "next-auth/client";
import { SignInButton } from ".";

jest.mock("next-auth/client");

describe("SignInButton component", () => {
  it("renders correctly when user is not authenticated", () => {
    const usedSessionMocked = mocked(useSession);

    usedSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText("Sign in with github")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    const usedSessionMocked = mocked(useSession);

    usedSessionMocked.mockReturnValueOnce([
      {
        user: { name: "John Doe", email: "john.doe@gmail.com" },
        expires: "fake-expires",
      },
      false,
    ]);

    render(<SignInButton />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
