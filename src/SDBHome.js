import ServerlessDB from "./ServerlessDB";

export default function SDBHome() {
  return (
    <>
      <h5>
        Funcionality for using two tables connected with foreign key. Foreign
        key field selection made with dropdown list. Made with reusable
        components.
      </h5>
      <br />
      <ServerlessDB />
    </>
  );
}
