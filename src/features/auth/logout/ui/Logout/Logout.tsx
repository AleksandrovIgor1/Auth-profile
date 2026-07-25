import styles from './styles.module.css';
import LogoutIcon from '@/shared/icons/Logout.svg?react';
import { useAppDispatch } from '@/app/providers/store/hooks';
import { logout as logoutAction } from "@/entities/auth/model/authSlice";
import { useLogoutMutation } from '@/entities/auth/api/authApi';

const Logout = () => {
    const dispatch = useAppDispatch();

    const [logout] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            dispatch(logoutAction());

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button className={styles.logoutButton} onClick={handleLogout}><LogoutIcon /><span>Выход</span></button>
    )
}

export default Logout