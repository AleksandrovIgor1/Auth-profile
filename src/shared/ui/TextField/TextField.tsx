import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({
        id,
        label,
        required,
        ...props
    }, ref) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;

        return (
            <div className={styles.field}>
                <label
                    htmlFor={inputId}
                    className={styles.label}
                >
                    {label}
                    {required && ' *'}
                </label>

                <input
                    ref={ref}
                    {...props}
                    id={inputId}
                    className={styles.input}
                />
            </div>
        );
    }
)