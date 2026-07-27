import styles from './styles.module.css';
import { useRegisterForm } from '../../model/useRegisterForm';
import { Input, PasswordInput } from '@/shared/ui';
import { useRegisterMutation } from '@/entities/auth/api/authApi';
import type { Auth } from '@/entities/auth';
import { ROUTES } from '@/shared/config/routes';
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from '@/entities/auth/model/authSlice';
import { useAppDispatch } from '@/shared/lib/store/hooks';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [registerUser] = useRegisterMutation();

    const { register, handleSubmit, errors } = useRegisterForm();

    const onSubmit = async (data: Auth) => {
        try {
            const response = await registerUser(data).unwrap();
            dispatch(setAccessToken(response.access_token))
            navigate(ROUTES.PROFILE);

        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input label='Никнейм' placeholder='Введите никнейм' {...register('username')} />
                <Input label='Почта' placeholder='Введите электронную почту' error={errors.email?.message} {...register('email')} type='email' />
                <PasswordInput label='Пароль' placeholder='Введите пароль' {...register('password')} error={errors.password?.message} />
                <PasswordInput label='Подтвердить пароль' placeholder='Введите пароль' {...register('confirmPassword')} error={errors.confirmPassword?.message} />

                <div className={styles.confirmContainer}>
                    <p className={styles.confirmTitle}>Проставив галочку («✔») и нажимая «Зарегистрироваться»:</p>
                    <ul className={styles.confirmList}>
                        <li className={styles.confirm}>
                            <input type="checkbox" />
                            <span>Даю согласие на <a className={styles.confirmLink}>обработку ПД,</a> в соответствии с <a className={styles.confirmLink}>Политикой в отношении ПД</a></span>
                        </li>
                        <li className={styles.confirm}>
                            <input type="checkbox" /> <span>Я подтверждаю что ознакомился(-ась) с Договором-офертой</span>
                        </li>
                        <li className={styles.confirm}>
                            <input type="checkbox" /> <span>Даю согласие на получение рекламных и информационных рассылок</span>
                        </li>
                    </ul>
                </div>

                <button type="submit" className={styles.inputButton}>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Register