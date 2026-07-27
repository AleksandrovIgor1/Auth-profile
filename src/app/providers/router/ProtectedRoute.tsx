import { Navigate, Outlet } from "react-router-dom"
import { ROUTES } from "@/shared/config/routes";
import { useAppSelector } from "@/shared/lib/store/hooks";

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