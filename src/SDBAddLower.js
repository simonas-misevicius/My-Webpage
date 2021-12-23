import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import Select from "react-select";

const INSERT_LOWER = gql`
  mutation Mutation($name: String!, $keyId: ID!) {
    addLower(name: $name, keyId: $keyId) {
      success
    }
  }
`;

export default function SDBAddLower({ uppers, refetch }) {
  const [mutateFunction, { data, loading, error }] = useMutation(INSERT_LOWER);
  const [selectionId, setSelectionId] = useState("");
  const [newName, changename] = useState("");

  const options = uppers.map((item, i) => {
    return { value: item.id, label: item.name };
  });
  if (data) {
    refetch();
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutateFunction({
            variables: { name: newName, keyId: selectionId.value },
          });
        }}
      >
        <input
          value={newName}
          onChange={(event) => {
            changename(event.target.value);
          }}
          type="text"
        />
        <button type="submit">Add lower</button>
      </form>
      <Select
        defaultValue={selectionId}
        onChange={setSelectionId}
        options={options}
      />
    </>
  );
}
