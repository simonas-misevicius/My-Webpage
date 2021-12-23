export default function SDBEdit({ EditList, rowInfo, refetch, Edit, uppers }) {
  const cancelEdit = () => {
    EditList(0, null, null);
  };
  const handlesuccess = () => {
    refetch();
    EditList(0, null, null);
  };
  return (
    <>
      <Edit rowInfo={rowInfo} handlesuccess={handlesuccess} uppers={uppers} />
      <button onClick={cancelEdit}>Cancel</button>
    </>
  );
}
