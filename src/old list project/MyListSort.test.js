import MyList from "./MyList";
import { mount } from "enzyme";

const data = [
  { name: "c", number: 1 },
  { name: "a", number: 1 },
  { name: "b", number: 1 },
];

test("sort list", () => {
  const wrapper = mount(<MyList data={data} />);
  wrapper.find("#sort").simulate("click");
  expect(wrapper.find("#textEdit").at(0).props().value).toBe("a");
  expect(wrapper.find("#textEdit").at(1).props().value).toBe("b");
  expect(wrapper.find("#textEdit").at(2).props().value).toBe("c");
});
