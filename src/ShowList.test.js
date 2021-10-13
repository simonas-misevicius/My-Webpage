import { render } from "@testing-library/react";
import MyList from "./MyList";

const data = [
  { name: "bla", number: 123 },
  { name: "ut", number: 235 },
];

test("count list items", () => {
  render(<MyList data={data} />);
  const elements = document.getElementsByTagName("li");
  expect(elements).toHaveLength(2);
});
