import styles from './styles.module.css';
import { useRegisterForm } from '../../model/useRegisterForm';
import { Input, PasswordInput } from '@/shared/ui';
import { useRegisterMutation } from '@/entities/auth/api/authApi';
import type { Auth } from '@/entities/auth';

const Register = () => {

    const [registerUser] = useRegisterMutation();

    const { register, handleSubmit, errors } = useRegisterForm();

    const onSubmit = async (data: Auth) => {
        await registerUser(data)
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input label='Никнейм' placeholder='Введите никнейм' {...register('username')} />
                <Input label='Почта' placeholder='Введите электронную почту' error={errors.email?.message} {...register('email')} type='email' />
                <PasswordInput label='Пароль' placeholder='Введите пароль' {...register('password')} error={errors.password?.message} />
                <PasswordInput label='Подтвердить пароль' placeholder='Введите пароль' {...register('confirmPassword')} error={errors.confirmPassword?.message} />
                <button type="submit" className={styles.inputButton}>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Register