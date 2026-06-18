import { useState, type InputHTMLAttributes } from 'react'
import EyeSlash from '@/shared/icons/EyeSlash.svg?react';
import styles from './styles.module.css';

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const PasswordInput = ({ label, error, className, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={props.id} className={styles.label}>{label}</label>
      )}

      <div className={styles.inputWrapper}>
        <input {...props}
          type={showPassword ? 'text' : 'password'} id='password' placeholder='Введите пароль' className={`${styles.input} ${error ? styles.inputError : ''
            } ${className ?? ''}`} />
        <EyeSlash onClick={() =>
          setShowPassword((prev) => !prev)
        } className={`${styles.eyeIcon} ${error ? styles.eyeIconError : ''
          }`} />
      </div>
      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}

    </div>
  )
}

export default PasswordInput