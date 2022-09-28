import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/constant';
import Notfound from './components/Notfound/NotFound';
import Search from './pages/Search/Search';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.MAIN} element={<Search />} />
      <Route path={ROUTE.NOT_FOUND} element={<Notfound />} />
    </Routes>
  );
}

export default App;
