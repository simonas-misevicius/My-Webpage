import { useMutation, gql } from "@apollo/client";

export default function SDBRow({
  rowData,
  mutationString,
  Row,
  upperName,
  upperId,
  callEditList,
  checkData,
}) {
  const DELETE = gql(mutationString);
  const [mutateFunction, { data, loading, error }] = useMutation(DELETE);

  const removeItem = () => {
    mutateFunction({ variables: { id: rowData.id } });
  };
  const passEditRow = () => {
    callEditList(rowData, upperName, upperId);
  };
  if (data) {
    checkData(data);
  }
  return (
    <div>
      <Row rowData={rowData} upperName={upperName} />
      <button onClick={removeItem}>Remove item</button>
      <button onClick={passEditRow}>Edit item</button>
    </div>
  );
}
