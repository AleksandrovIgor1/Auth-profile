
import styles from './styles.module.css';
import LoginLayout from './LoginLayout/LoginLayout';
import { AuthAside, YeahubLogo } from '@/shared/ui';


const LoginPage = () => {
    return (
        <div className={styles.page}>
            <AuthAside />
            <YeahubLogo />
            <LoginLayout />
        </div>
    )
}

export default LoginPage