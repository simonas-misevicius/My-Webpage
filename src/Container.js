import LilName from "./LilName";

export default function Container({ nameList1, nameList2 }) {
  return (
    <>
      <div>
        {nameList1.map((item, i) => (
          <LilName name={item} id={i} />
        ))}
      </div>
      <br />
      <div>
        {nameList2.map((item, i) => (
          <LilName name={item} id={i} />
        ))}
      </div>
    </>
  );
}
