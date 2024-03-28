import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageList from './pages/Pagelist';
import { base_url } from './config';
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <PageList />
      </Router>
    </>
  );
}

export default App;
