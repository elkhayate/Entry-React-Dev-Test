import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient,InMemoryCache, ApolloProvider} from '@apollo/client';
import DataContextProvider from './contexts/DataContext';




const client = new ApolloClient({
  uri : "http://localhost:4000/",
  cache : new InMemoryCache(),

})

ReactDOM.render(
  
  <React.StrictMode>
    <ApolloProvider client={client}>
      <DataContextProvider>
    <App />
    </DataContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

