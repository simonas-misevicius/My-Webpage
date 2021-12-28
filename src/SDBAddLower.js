import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import Select from "react-select";
import { useAlert } from "react-alert";

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
  const alert = useAlert();

  let selectionOptions;
  if (uppers != null) {
    selectionOptions = uppers.map((item, i) => {
      return { value: item.id, label: item.name };
    });
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutateFunction({
            variables: { name: newName, keyId: selectionId.value },
          })
            .then(({ data }) => {
              refetch();
            })
            .catch((e) => {
              alert.error("Missing input!");
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
        <Select
          defaultValue={selectionId}
          onChange={setSelectionId}
          options={selectionOptions}
        />
      </form>
    </>
  );
}
