import React from 'react';
import Layout from '../components/layout';
import auth from '../utils/auth';


const Home = () => {
  const checklogin = () => {
  if (!auth.loggedIn()) {
    window.location.replace('/login');
  }}
  checklogin();

  return (
    <main className='h-screen bg-gray-800' >
    <Layout/>
    </main>
  );
};

export default Home;