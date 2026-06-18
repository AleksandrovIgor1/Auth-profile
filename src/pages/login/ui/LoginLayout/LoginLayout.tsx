
import { Login } from '@/features/auth/login';
import styles from './styles.module.css';
import Facebook from '@/shared/icons/Facebook.svg?react';
import Google from '@/shared/icons/Google.svg?react';
import Telegram from '@/shared/icons/Telegram.svg?react';
import { Link } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.loginContainer}>
                    <Login />
                    <div className={styles.registrationSocialNetwork}>
                        <span>Зарегистрироваться через социальные сети</span>
                        <div className={styles.socialNetworkIcons}>
                            <Telegram />
                            <Google />
                            <Facebook />
                        </div>
                    </div>
                </div>

                <div className={styles.noAccountSection}>
                    <span>Нет аккаунта?</span>
                    <Link to="/register" className={styles.registerLink}>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout