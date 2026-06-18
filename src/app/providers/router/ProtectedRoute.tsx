import { getFromLS } from "@/shared/lib/localStorage"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const token = getFromLS('access_token');
    if (!token) {
        return <Navigate to='login' replace />
    }
    return <Outlet />
}

export default ProtectedRoute