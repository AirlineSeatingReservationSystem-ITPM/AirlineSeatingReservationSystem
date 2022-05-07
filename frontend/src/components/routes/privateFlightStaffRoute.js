import { Navigate } from "react-router-dom";

function PrivateFlightStaffRoute({ children }) {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default PrivateFlightStaffRoute;
