import { Outlet, Navigate } from 'react-router-dom';

function PublicRoute() {
  let isLoggedIn = false;  // Fetch this from your state, context, Redux, etc.

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default PublicRoute;
