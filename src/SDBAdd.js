import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const INSERT_UPPER = gql`
  mutation Mutation($name: String!) {
    addUpper(name: $name) {
      success
    }
  }
`;

export default function SDBAdd({ refetch }) {
  const [mutateFunction, { data, loading, error }] = useMutation(INSERT_UPPER);
  const [name, changename] = useState("");
  if (data) {
    refetch();
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutateFunction({ variables: { name: name } });
      }}
    >
      <input
        value={name}
        onChange={(event) => {
          changename(event.target.value);
        }}
        type="text"
      />
      <button type="submit">Add item</button>
    </form>
  );
}
