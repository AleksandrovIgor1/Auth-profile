import { useGetProfileQuery } from '@/entities/profile/api/profileApi';
import { ROUTES } from '@/shared/config/routes';
import { Navigate, Outlet } from 'react-router-dom';

const VerifiedRoute = () => {
    const { data: profile, isLoading } = useGetProfileQuery();
    if (isLoading) return <div>Loading...</div>

    if (!profile) {
        return null;
    }

    if (!profile?.isVerified) return <Navigate to={ROUTES.VERIFY_EMAIL} replace />

    return <Outlet />
}

export default VerifiedRoute