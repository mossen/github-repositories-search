import React from "react";
import { render } from "@testing-library/react";
import List from ".";

test("renders List component", async () => {
  const mockFunction = jest.fn(() => null);
  const { container } = await render(
    <List
      items={null}
      isLoading={false}
      canLoadMore={false}
      loadMoreHandler={mockFunction}
    />
  );
  const ListElements = container.querySelectorAll("p.text-sm");
  expect(ListElements.length).toBeLessThanOrEqual(0);
});
