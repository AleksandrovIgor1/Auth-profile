import { useLazyLogoutQuery } from '@/entities/auth/api/authApi';
import styles from './styles.module.css';
import LogoutIcon from '@/shared/icons/Logout.svg?react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';

const Logout = () => {
    const navigate = useNavigate();

    const [logout] = useLazyLogoutQuery();

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            navigate(ROUTES.LOGIN);

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button className={styles.logoutButton} onClick={handleLogout}><LogoutIcon /><span>Выход</span></button>
    )
}

export default Logout