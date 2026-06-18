import styles from './styles.module.css';
import { AuthAside, YeahubLogo } from '@/shared/ui';
import RegisterLayout from './RegisterLayout/RegisterLayout';

const Register = () => {
    return (
        <div className={styles.page}>

            <AuthAside />
            <YeahubLogo />
            <RegisterLayout />
        </div>
    )
}

export default Register