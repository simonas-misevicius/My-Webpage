import SDBEdit from "./SDBEdit";
import { useState } from "react";

export default function SDBList({ data, List, refetch, Edit }) {
  const [rowInfo, setRowInfo] = useState({
    showEdit: 0,
    name: null,
    id: null,
    upperName: null,
    upperId: null,
  });
  const SwitchBetweenListAndEdit = (
    showEdit,
    name,
    id,
    upperName = null,
    upperId = null
  ) => {
    setRowInfo({
      showEdit: showEdit,
      name: name,
      id: id,
      upperName: upperName,
      upperId: upperId,
    });
  };
  if (rowInfo.showEdit == 1) {
    return (
      <SDBEdit
        ReturnToList={SwitchBetweenListAndEdit}
        rowInfo={rowInfo}
        refetch={refetch}
        Edit={Edit}
        uppers={data.uppers}
      />
    );
  }
  return (
    <List data={data} EditRow={SwitchBetweenListAndEdit} refetch={refetch} />
  );
}
