import SDBRow from "./SDBRow";
import SDBRowUpper from "./SDBRowUpper";

const mutationString = `
mutation Mutation($id: ID!) {
  removeUpper(id: $id) {
    success
  }
}`;

export default function SDBListUpper({ data, EditList, refetch }) {
  const callEditList = (rowData) => {
    EditList(1, rowData.name, rowData.id);
  };
  const checkData = (data) => {
    if (data.removeUpper.success) {
      refetch();
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
                Row={SDBRowUpper}
                callEditList={callEditList}
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
                Row={SDBRowUpper}
                callEditList={callEditList}
                checkData={checkData}
              />
            </li>
          );
        }
      })}
    </ul>
  );
}
