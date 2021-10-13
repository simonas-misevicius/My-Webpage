import MyList from "./MyList";
import { mount } from "enzyme";

const data = [
  { name: "a", number: 12 },
  { name: "b", number: 3 },
];

test("sum list", () => {
  const wrapper = mount(<MyList data={data} />);
  expect(wrapper.find("#sum").text()).toEqual(expect.stringContaining("15"));
});
