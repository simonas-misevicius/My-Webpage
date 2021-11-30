import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from "react";

const GET_UPPERS = gql`
  query {
    uppers {
      name
    }
  }
`;

const INSERT_UPPER = gql`
  mutation Mutation($name: String!) {
    addUpper(name: $name) {
      success
    }
  }
`;

export default function ServerlessDB() {
  const { loading, error, data, refetch } = useQuery(GET_UPPERS);
  const [mutateFunction, { mdata, mloading, merror }] =
    useMutation(INSERT_UPPER);
  const [sname, changename] = useState("");
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutateFunction({ variables: { name: sname } });
            refetch();
          }}
        >
          <input
            value={sname}
            onChange={(event) => {
              changename(event.target.value);
            }}
            type="text"
          />
          <button type="submit">Add item</button>
        </form>
      </div>
      <button onClick={() => refetch()}>Refresh</button>
      <div>
        {mloading ? (
          <p>Loading...</p>
        ) : merror ? (
          <p>Error </p>
        ) : mdata ? (
          <p>{mdata} </p>
        ) : null}
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error </p>
        ) : (
          <ul>
            {data.uppers.map((item, i) => {
              return (
                <li key={i}>
                  <div>{item.name}</div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
//<div>data: {data.uppers[0].name}</div>
