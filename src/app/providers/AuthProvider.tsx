import { useRefreshQuery } from "@/entities/auth/api/authApi";

const AuthProvider = () => {
    useRefreshQuery();

    return null;
};

export default AuthProvider;