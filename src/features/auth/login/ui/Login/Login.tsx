import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Input, PasswordInput } from '@/shared/ui';
import { useLoginMutation } from '@/entities/auth/api/authApi';
import type { Auth } from '@/entities/auth';
import { useForm } from 'react-hook-form';
import { ROUTES } from '@/shared/config/routes';
import { useAppDispatch } from '@/app/providers/store/hooks';
import { setAccessToken } from '@/entities/auth/model/authSlice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<Auth>();

    const [loginUser, { isLoading, error }] = useLoginMutation();

    const onSubmit = async (data: Auth) => {
        try {
            const response = await loginUser(data).unwrap();
            dispatch(setAccessToken(response.access_token))
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
                <button type="submit" className={styles.inputButton}>{isLoading ? "Вход..." : "Вход"}</button>
            </form>
            {error && (
                <div className={styles.error}>Неверный логин или пароль</div>
            )}
        </div>
    )
}

export default Login