import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../types";

const ProtectedRouteElement = ({ element: Component, ...props }: {element: React.FC}) => {
  const loggedIn = useSelector((state: RootState) => state.logged.loggedIn);

  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default ProtectedRouteElement;