import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import './App.css';
// Set up Apollo Client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3001/graphql' }),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

        </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;