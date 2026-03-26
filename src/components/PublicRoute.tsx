import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute() {
  const token = localStorage.getItem('rs_token');

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
