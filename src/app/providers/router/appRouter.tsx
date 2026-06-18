import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout";
import Profile from "@/pages/profile/ui/Page";
import { getFromLS } from "@/shared/lib/localStorage";
import { Login } from "@/pages/login";
import Register from "@/pages/register/ui/Page";
import ProtectedRoute from "./ProtectedRoute";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        errorElement: <div>Error</div>,
        children: [
            {
                index: true,
                element: <Navigate to={getFromLS('access_token') ? '/profile' : '/login'} replace />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/profile',
                        element: <Profile />
                    }
                ]
            }
        ]
    }
])