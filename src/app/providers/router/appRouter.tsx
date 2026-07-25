import { createBrowserRouter, Navigate } from "react-router-dom";
import Profile from "@/pages/profile/ui/Page";
import { Login } from "@/pages/login";
import Register from "@/pages/register/ui/Page";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "@/shared/config/routes";
import EditProfile from "@/pages/profileEdit/ui/Page";
import AuthLayout from "@/app/layouts/authLayout/ui/AuthLayout";
import ProfileLayout from "@/app/layouts/profileLayout/ui/ProfileLayout";
import RootRedirect from "./RootRedirect";
import RootLayout from "@/app/layouts/rootLayout/ui/RootLayout";
import { InfoSection } from "@/widgets/profile/edit-profile-info/ui";
import { AboutSection } from "@/widgets/profile/edit-profile-about/ui";
import { SkillsSection } from "@/widgets/profile/edit-profile-skills/ui";
import VerifiedRoute from "./VerifiedRoute";
import { VerifyEmail } from "@/pages/verify-email";

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
                                                element: <InfoSection />,
                                            },
                                            {
                                                path: "about",
                                                element: <AboutSection />,
                                            },
                                            {
                                                path: "skills",
                                                element: <SkillsSection />,
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