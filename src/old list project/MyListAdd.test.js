import MyList from "./MyList";
import { mount } from "enzyme";

const data = [{ name: "a", number: 1 }];

test("add to list", () => {
  const wrapper = mount(<MyList data={data} />);
  expect(wrapper.find("li")).toHaveLength(1);
  wrapper.find("#numInput").simulate("change", { target: { value: "2" } });
  wrapper.find("#textInput").simulate("change", { target: { value: "b" } });
  wrapper.find("#addButton").simulate("click");
  expect(wrapper.find("li")).toHaveLength(2);
});
