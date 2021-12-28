export default function SDBEdit({
  ReturnToList,
  rowInfo,
  refetch,
  Edit,
  uppers,
}) {
  const cancelEdit = () => {
    ReturnToList(0, null, null);
  };
  const handlesuccess = () => {
    refetch();
    ReturnToList(0, null, null);
  };
  return (
    <>
      <Edit rowInfo={rowInfo} handlesuccess={handlesuccess} uppers={uppers} />
      <button onClick={cancelEdit}>Cancel</button>
    </>
  );
}
