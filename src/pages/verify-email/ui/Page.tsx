import { profileApi, useGetProfileQuery } from '@/entities/profile/api/profileApi';
import { ROUTES } from '@/shared/config/routes';
import styles from './styles.module.css';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useVerifyEmailMutation } from '@/entities/auth/api/authApi';
import { useEffect } from 'react';
import { useAppDispatch } from '@/app/providers/store/hooks';
import Aside from './Aside/Aside';
import { VerifyEmailCard } from '@/features/auth/verify-email';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const {
        data: profile,
        isLoading,
    } = useGetProfileQuery();



    const [verifyEmail, { isLoading: isVerifying }] = useVerifyEmailMutation();

    useEffect(() => {
        if (!token) return;

        const confirm = async () => {
            try {
                await verifyEmail(token).unwrap();

                dispatch(profileApi.util.invalidateTags(["Profile"]));

                navigate(ROUTES.PROFILE, {
                    replace: true,
                });
            } catch (e) {
                console.error(e);
            }
        };

        confirm();
    }, [token, verifyEmail, dispatch, navigate]);

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (profile?.isVerified) {
        return <Navigate to={ROUTES.PROFILE} replace />;
    }

    if (token) {
        return (
            <div className={styles.page}>
                <h2>
                    {isVerifying
                        ? "Подтверждаем email..."
                        : "Email подтвержден"}
                </h2>
            </div>
        );
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
