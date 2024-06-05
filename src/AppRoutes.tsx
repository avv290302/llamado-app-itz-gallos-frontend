import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layouts';
import HomePage from './pages/HomePage';
import AuthCallBackPage from './pages/AuthCallBackPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3'; 
import ProtectedRoute from './layouts/auth/ProtectedRoute';
import ManageRestaurantPage from './pages/ManageRestaurantPage';
import SearchPage from './pages/SearchPage';
import Inicio from './pages/Inicio';

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
          path="/gallos/3"
          element={
            <Layout>
              <Page1 />
            </Layout>
          }
        />
        <Route
          path="/gallos/4"
          element={
            <Layout>
              <Page2 />
            </Layout>
          }
        />
        <Route
          path="/gallos/5"
          element={
            <Layout>
              <Page3 />
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
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
