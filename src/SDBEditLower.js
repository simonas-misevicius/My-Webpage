import { useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import Select from "react-select";

const EDIT_LOWER = gql`
  mutation Mutation($name: String!, $keyId: ID!, $id: ID!) {
    editLower(name: $name, keyId: $keyId, id: $id) {
      success
    }
  }
`;

export default function SDBEditLower({ rowInfo, handlesuccess, uppers }) {
  const [mutateFunction, { data, loading, error }] = useMutation(EDIT_LOWER);
  const [newName, changename] = useState(rowInfo.name);
  const [selectionId, setSelectionId] = useState({
    value: rowInfo.upperId,
    label: rowInfo.upperName,
  });

  const selectionOptions = uppers.map((item, i) => {
    return { value: item.id, label: item.name };
  });
  useEffect(() => {
    if (data) {
      handlesuccess();
    }
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutateFunction({
            variables: {
              name: newName,
              keyId: selectionId.value,
              id: rowInfo.id,
            },
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
        <button type="submit">Save</button>
      </form>
      <Select
        defaultValue={selectionId}
        onChange={setSelectionId}
        options={selectionOptions}
      />
    </>
  );
}
