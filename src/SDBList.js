import SDBEdit from "./SDBEdit";
import { useState } from "react";

export default function SDBList({ data, List, refetch, Edit }) {
  const [editSwitch, setEditSwitch] = useState({
    state: 0,
    name: null,
    id: null,
    upperName: null,
    upperId: null,
  });
  const EditList = (state, name, id, upperName = null, upperId = null) => {
    setEditSwitch({
      state: state,
      name: name,
      id: id,
      upperName: upperName,
      upperId: upperId,
    });
  };
  if (editSwitch.state == 1) {
    return (
      <SDBEdit
        EditList={EditList}
        rowInfo={editSwitch}
        refetch={refetch}
        Edit={Edit}
        uppers={data.uppers}
      />
    );
  }
  return <List data={data} EditList={EditList} refetch={refetch} />;
}
