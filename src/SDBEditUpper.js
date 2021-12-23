import { useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";

const EDIT_UPPER = gql`
  mutation Mutation($name: String!, $id: ID!) {
    editUpper(name: $name, id: $id) {
      success
    }
  }
`;

export default function SDBEditUpper({ rowInfo, handlesuccess }) {
  const [mutateFunction, { data, loading, error }] = useMutation(EDIT_UPPER);
  const [newName, changename] = useState(rowInfo.name);
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
          mutateFunction({ variables: { name: newName, id: rowInfo.id } });
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
    </>
  );
}
