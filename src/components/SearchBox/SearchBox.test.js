import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBox from ".";

test("renders SearchBox component", async () => {
  const mockFunction = jest.fn(() => null);
  const { getByText } = await render(
    <SearchBox label="Search" onChangeHandler={mockFunction} />
  );
  const element = getByText("Search");
  expect(element).toBeInTheDocument();
});

test("allows user to add the keyword", async () => {
  const mockFunction = jest.fn(() => null);
  render(<SearchBox label="Search" onChangeHandler={mockFunction} />);

  fireEvent.change(screen.getByTestId(/search-input/i), {
    target: { value: "react" }
  });
  const input = await screen.findByDisplayValue("react");

  expect(input).toBeInTheDocument();
});
