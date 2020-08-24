import React from "react";
import { render } from "@testing-library/react";
import Item from ".";

test("renders app component", () => {
  const { getByText } = render(
    <Item
      item={{
        id: "1",
        name: "test item",
        // eslint-disable-next-line @typescript-eslint/camelcase
        watchers_count: 34
      }}
    />
  );
  const linkElement = getByText(/test item/i);
  expect(linkElement).toBeInTheDocument();
});
