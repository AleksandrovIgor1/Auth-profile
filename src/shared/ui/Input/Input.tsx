import { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  error?: string;
}
import styles from './styles.module.css';

const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={props.id} className={styles.label}>
          {label}
        </label>
      )}
      <input {...props} type="text" id='name'
        className={`${styles.input} ${error ? styles.inputError : ''
          } ${className ?? ''}`} />
      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}
    </div>
  )
}

export default Input