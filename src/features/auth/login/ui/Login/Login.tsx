import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Input, PasswordInput } from '@/shared/ui';
import { useLoginMutation } from '@/entities/auth/api/authApi';
import type { Auth } from '@/entities/auth';
import { useForm } from 'react-hook-form';
import { ROUTES } from '@/shared/config/routes';


const Login = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<Auth>();

    const [loginUser] = useLoginMutation();

    const onSubmit = async (data: Auth) => {
        try {
            await loginUser(data).unwrap();
            navigate(ROUTES.PROFILE);

        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Вход в личный кабинет</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputsContainer}>
                    <Input {...register('username')} label='Почта' placeholder='Введите электронную почту' type='email' />
                    <PasswordInput {...register('password')} label='Пароль' placeholder='Введите пароль' />
                </div>
                <Link to='' className={styles.forgotPassword}>Забыли пароль?</Link>
                <button type="submit" className={styles.inputButton}>Вход</button>
            </form>
        </div>
    )
}

export default Login