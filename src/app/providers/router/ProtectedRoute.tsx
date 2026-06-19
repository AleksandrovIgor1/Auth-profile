import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../store/hooks";
import { ROUTES } from "@/shared/config/routes";

const ProtectedRoute = () => {
    const { accessToken, initialized } =
        useAppSelector((state) => state.auth);

    if (!initialized) {
        return <div>Loading...</div>;
    }

    if (!accessToken) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <Outlet />
}

export default ProtectedRoute