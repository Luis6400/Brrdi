import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import './App.css';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_API_URL });

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/settings" element={<Home />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
