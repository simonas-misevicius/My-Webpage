import MyList from "./MyList";
import { mount } from "enzyme";

const data = [{ name: "a", number: 1 }];

test("edit in list", () => {
  const wrapper = mount(<MyList data={data} />);
  expect(wrapper.find("li")).toHaveLength(1);
  wrapper.find("#numEdit").simulate("change", { target: { value: "2" } });
  wrapper.find("#textEdit").simulate("change", { target: { value: "b" } });
  wrapper.find("#editButton").simulate("click");
  expect(wrapper.find("#numEdit").props().value).toBe("2");
  expect(wrapper.find("#textEdit").props().value).toBe("b");
});
