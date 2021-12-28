import SDBRow from "./SDBRow";
import SDBRowUpper from "./SDBRowUpper";
import { useAlert } from "react-alert";

const mutationString = `
mutation Mutation($id: ID!) {
  removeUpper(id: $id) {
    success
  }
}`;

export default function SDBListUpper({ data, EditRow, refetch }) {
  const alert = useAlert();

  const callEditRow = (rowData) => {
    EditRow(1, rowData.name, rowData.id);
  };
  const checkData = (data) => {
    if (data.removeUpper.success) {
      refetch();
    } else {
      alert.show("Remove lowers first");
    }
  };
  return (
    <ul>
      {data.uppers.map((item, i) => {
        if (item.lowers[0].id != null) {
          return (
            <li key={i}>
              <SDBRow
                rowData={item}
                mutationString={mutationString}
                MyRow={SDBRowUpper}
                callEditRow={callEditRow}
                checkData={checkData}
              />
              <ul>
                {item.lowers.map((lowerItem, loi) => {
                  return (
                    <li key={loi}>
                      <div>{lowerItem.namel}</div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={i}>
              <SDBRow
                rowData={item}
                mutationString={mutationString}
                MyRow={SDBRowUpper}
                callEditRow={callEditRow}
                checkData={checkData}
              />
            </li>
          );
        }
      })}
    </ul>
  );
}
