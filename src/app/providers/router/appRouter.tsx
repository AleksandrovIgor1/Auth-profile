import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../../layouts/BaseLayout";
import Profile from "@/pages/profile/ui/Page";
import { Login } from "@/pages/login";
import Register from "@/pages/register/ui/Page";
import ProtectedRoute from "./ProtectedRoute";
import ProfileRedirect from "./ProfileRedirect";
import { ROUTES } from "@/shared/config/routes";

export const appRouter = createBrowserRouter([
    {
        path: ROUTES.BASE,
        element: <BaseLayout />,
        errorElement: <div>Error</div>,
        children: [
            {
                index: true,
                element: <ProfileRedirect />
            },
            {
                path: ROUTES.LOGIN,
                element: <Login />
            },
            {
                path: ROUTES.REGISTER,
                element: <Register />
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: ROUTES.PROFILE,
                        element: <Profile />
                    }
                ]
            }
        ]
    }
])