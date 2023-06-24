import { Route, Routes } from 'react-router';
import { LoginPages } from '../auth/pages/LoginPages';
import { HerosRouts } from '../heroes/index.js';
import { PrivateRoute } from './PrivateRoute.jsx';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>
  

    <Routes>
     
      <Route path="login/*" element={
      <PublicRoute>
        <Routes>
          <Route path="/*" element={<LoginPages />}/>        
        </Routes>
      </PublicRoute>
      } />
      {/* <Route path="/*" element={ <HerosRouts /> } /> */}


      <Route path="/*" element={
        <PrivateRoute>
          <HerosRouts />
       </PrivateRoute>
      } />
    </Routes>
    </>
  )
}
