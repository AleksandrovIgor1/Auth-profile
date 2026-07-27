import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "@/pages/login";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "@/shared/config/routes";
import RootRedirect from "./RootRedirect";
import VerifiedRoute from "./VerifiedRoute";
import { VerifyEmail } from "@/pages/verify-email";
import { EditProfile } from "@/pages/profileEdit";
import { AuthLayout, ProfileLayout, RootLayout } from "@/app/layouts";
import { Register } from "@/pages/register";
import { Profile } from "@/pages/profile";
import ProfileEditInfo from "@/pages/profileEditInfo/ui/Page";
import ProfileEditAbout from "@/pages/ProfileEditAbout/ui/Page";
import ProfileEditSkills from "@/pages/ProfileEditSkills/ui/Page";

export const appRouter = createBrowserRouter([
    {
        path: ROUTES.BASE,
        element: <RootLayout />,
        errorElement: <div>Error</div>,
        children: [
            {
                index: true,
                element: <RootRedirect />
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: ROUTES.LOGIN,
                        element: <Login />
                    },
                    {
                        path: ROUTES.REGISTER,
                        element: <Register />
                    },
                ]
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <ProfileLayout />,
                        children: [
                            {
                                path: ROUTES.VERIFY_EMAIL,
                                element: <VerifyEmail />,
                            },
                            {
                                element: <VerifiedRoute />,
                                children: [
                                    {
                                        path: ROUTES.PROFILE,
                                        element: <Profile />,
                                    },
                                    {
                                        path: ROUTES.EDIT_PROFILE,
                                        element: <EditProfile />,
                                        children: [
                                            {
                                                index: true,
                                                element: <Navigate to="info" replace />,
                                            },
                                            {
                                                path: "info",
                                                element: <ProfileEditInfo />,
                                            },
                                            {
                                                path: "about",
                                                element: <ProfileEditAbout />,
                                            },
                                            {
                                                path: "skills",
                                                element: <ProfileEditSkills />,
                                            },
                                            // {
                                            //     path: "projects",
                                            //     element: <ProjectsSection />,
                                            // },
                                            // {
                                            //     path: "profile",
                                            //     element: <JobsSection />,
                                            // },
                                            // {
                                            //     path: "education",
                                            //     element: <EducationSection />,
                                            // },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ]
    }
])