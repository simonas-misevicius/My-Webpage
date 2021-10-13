import MyList from "./MyList";
import { mount } from "enzyme";

const data = [
  { name: "a", number: 1 },
  { name: "ab", number: 1 },
  { name: "c", number: 1 },
];

test("filter list", () => {
  const wrapper = mount(<MyList data={data} />);
  wrapper.find("#filter").simulate("change", { target: { value: "a" } });
  expect(wrapper.find("li")).toHaveLength(2);
});
