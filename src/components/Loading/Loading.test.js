import React from "react";
import { render } from "@testing-library/react";
import Loading from ".";

test("renders Loading component", () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId("loading")).toBeInTheDocument();
});

it("renders Loading component but not showing it", () => {
  const { queryByTestId } = render(<Loading show={false} />);
  expect(queryByTestId("loading")).toBeNull();
});
