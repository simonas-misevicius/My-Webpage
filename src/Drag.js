import React from "react";
import { useDrag } from "react-dnd";
import Container from "./Container";

export default function Drag() {
  const list1 = ["a", "b"];
  const list2 = ["c", "e"];
  return <Container nameList1={list1} nameList2={list2} />;
}
