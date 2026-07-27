import Register from '@/features/auth/register/ui/Register/Register';
import styles from './styles.module.css';
import Facebook from '@/shared/icons/Facebook.svg?react';
import Google from '@/shared/icons/Google.svg?react';
import Telegram from '@/shared/icons/Telegram.svg?react';


import { Link } from 'react-router-dom';

const RegisterLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.formContainer}>
                    <Register />

                    <div className={styles.registrationSocialNetwork}>
                        <p className={styles.registrationTitle}>Зарегистрироваться через социальные сети</p>
                        <div className={styles.socialNetworkIcons}>
                            <Telegram />
                            <Google />
                            <Facebook />
                        </div>
                    </div>
                </div>
                <div className={styles.noAccountSection}>
                    <span>Уже есть аккаунт?</span>
                    <Link to="/login" className={styles.registerLink}>
                        Войти
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterLayout