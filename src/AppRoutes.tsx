import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layouts';
import HomePage from './pages/HomePage';
import AuthCallBackPage from './pages/AuthCallBackPage';
import Gallos3 from './pages/Gallos3';
import Gallos4 from './pages/Gallos4';
import Gallos5 from './pages/Gallos5';
import ProtectedRoute from './layouts/auth/ProtectedRoute';
import ManageRestaurantPage from './pages/ManageRestaurantPage';
import SearchPage from './pages/SearchPage';
import Inicio from './pages/Inicio';
import Rondas from './pages/Rondas';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero={true}>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallBackPage />} />
      {/* Rutas sin protección */}
      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      {/* Protección de rutas */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/inicio"
          element={
            <Layout>
              <Inicio />
            </Layout>
          }
        />
         
        {/* Rutas para Page1, Page2 y Page3 */}
        
        
        <Route
          path="/Gallos/3"
          element={
            <Layout>
              <Gallos3 />
            </Layout>
          }
        />
        <Route
          path="/Gallos/4"
          element={
            <Layout>
              <Gallos4 />
            </Layout>
          }
        />
         <Route
          path="/Gallos/5"
          element={
            <Layout>
              <Gallos5 />
            </Layout>
          }
        />
        {/* Fin de las rutas para Page1, Page2 y Page3 */}
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
        {/* Nueva ruta para Rondas */}
        <Route
          path="/rondas"
          element={
            <Layout>
              <Rondas />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;