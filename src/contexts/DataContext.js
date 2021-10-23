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

  const { data, loading, error } = useQuery(DATA);
  const [infos, setInfos] = useState();

  useEffect(() => {
      setInfos(data)
  },[data]);
  return (
    
    <DataContext.Provider value={{infos, loading, error}}>
      {props.children}
    </DataContext.Provider>
  )
}