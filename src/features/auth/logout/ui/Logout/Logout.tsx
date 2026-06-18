import { useLazyLogoutQuery } from '@/entities/auth/api/authApi';
import styles from './styles.module.css';
import LogoutIcon from '@/shared/icons/Logout.svg?react';

const Logout = () => {

    const [logout] = useLazyLogoutQuery();

    const handleLogout = async () => {
        await logout()
    }

    return (
        <button className={styles.logoutButton} onClick={handleLogout}><LogoutIcon /><span>Выход</span></button>
    )
}

export default Logout