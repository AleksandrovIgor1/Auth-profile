import { profileApi, useGetProfileQuery } from '@/entities/profile/api/profileApi';
import { ROUTES } from '@/shared/config/routes';
import styles from './styles.module.css';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useVerifyEmailMutation } from '@/entities/auth/api/authApi';
import { useEffect } from 'react';
import Aside from './Aside/Aside';
import { VerifyEmailCard } from '@/features/auth/verify-email';
import { useAppDispatch } from '@/shared/lib/store/hooks';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const {
        data: profile,
        isLoading: isProfileLoading,
    } = useGetProfileQuery();



    const [verifyEmail, { isLoading: isVerifying, isSuccess, isError }] = useVerifyEmailMutation();

    useEffect(() => {
        if (!token) return;

        verifyEmail(token).unwrap().catch(console.error);
    }, [token, verifyEmail]);

    useEffect(() => {
        if (!isSuccess) return;

        dispatch(profileApi.util.invalidateTags(["Profile"]));

        const timer = setTimeout(() => {
            navigate(ROUTES.PROFILE, { replace: true });
        }, 1500);

        return () => clearTimeout(timer);
    }, [isSuccess, dispatch, navigate]);

    if (isProfileLoading) {
        return <div>Loading</div>;
    }

    if (isVerifying) {
        return <div>Подтверждаем...</div>;
    }

    if (isSuccess) {
        return <div>Email подтвержден</div>;
    }

    if (isError) {
        return <div>Не удалось подтвердить email</div>;
    }

    if (profile?.isVerified) {
        return <Navigate to={ROUTES.PROFILE} replace />;
    }

    return (
        <div className={styles.page}>
            <h1 className={styles.h1}>Привет, {profile?.username}</h1>
            <div className={styles.container}>
                <VerifyEmailCard userId={profile?.id} username={profile?.username} />
                <Aside />
            </div>
        </div >
    )
}

export default VerifyEmail
