import React, { createContext, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';


export const DataContext = createContext();

export default function DataContextProvider(props) {
  const DATA = gql`
  query Query {
      categories {
        name
        products {
          brand
          category
          description
          inStock
          name
          id
          gallery
          attributes {
            id
            name
            items {
              value
              displayValue
              id
            }
            type
          }
          prices {
            amount
            currency
          }
        }
      }
      currencies
}
  `;

  const { error, loading, data } = useQuery(DATA);
  const [users, setUsers] = useState();
  useEffect(() => {
    if (data) {
      setUsers(data.data);
      console.log(data)
    }
  }, [data]);
  return (
    <DataContext.Provider value={users}>
      {props.children}
    </DataContext.Provider>
  )
}