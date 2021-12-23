import SDBRow from "./SDBRow";
import SDBRowLower from "./SDBRowLower";

const mutationString = `
mutation Mutation($id: ID!) {
  removeLower(id: $id) {
    success
  }
}`;

export default function SDBListLowers({ data, EditList, refetch }) {
  const callEditList = (rowData, upperName, upperId) => {
    EditList(1, rowData.namel, rowData.id, upperName, upperId);
  };
  const checkData = (data) => {
    if (data.removeLower.success) {
      refetch();
    }
  };
  return (
    <ul>
      {data.uppers.map((item, i) => {
        if (item.lowers[0].id != null) {
          return item.lowers.map((lowerItem, loi) => {
            return (
              <li key={i * 10 + loi}>
                <SDBRow
                  rowData={lowerItem}
                  mutationString={mutationString}
                  Row={SDBRowLower}
                  upperName={item.name}
                  upperId={item.id}
                  callEditList={callEditList}
                  checkData={checkData}
                />
              </li>
            );
          });
        }
      })}
    </ul>
  );
}
