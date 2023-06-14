import { Navigate, Route, Routes } from 'react-router';

import { DCPages, MarvelPages } from '../heroes/Pages/index.js';
import { LoginPages } from '../auth/pages/LoginPages';
import { Navbar } from '../ui';
import { HerosRouts } from '../heroes/index.js';

export const AppRouter = () => {
  return (
    <>
  

    <Routes>
     
      <Route path="login" element={ <LoginPages /> } />
      <Route path="/*" element={ <HerosRouts /> } />

     
     </Routes>
    </>
  )
}
