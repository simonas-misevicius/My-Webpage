import MyList from "./MyList";
import { mount } from "enzyme";

const data = [
  { name: "a", number: 1 },
  { name: "b", number: 2 },
];

test("delete from list", () => {
  const wrapper = mount(<MyList data={data} />);
  expect(wrapper.find("li")).toHaveLength(2);
  wrapper.find("#deleteButton").at(0).simulate("click");
  expect(wrapper.find("li")).toHaveLength(1);
});
