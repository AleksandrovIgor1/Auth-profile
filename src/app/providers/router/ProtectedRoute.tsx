import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../store/hooks";
import { ROUTES } from "@/shared/config/routes";

const ProtectedRoute = () => {
    const { accessToken, authChecked } =
        useAppSelector((state) => state.auth);

    if (!authChecked) {
        return <div>Loading...</div>;
    }

    if (!accessToken) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return <Outlet />
}

export default ProtectedRoute