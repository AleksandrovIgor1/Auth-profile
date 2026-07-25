import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import styles from './styles.module.css';
import ResizeTextarea from '@/shared/icons/ResizeTextarea.svg?react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    showCounter?: boolean;
    label?: string;
    id?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
    showCounter = true,
    maxLength,
    className,
    onChange,
    value,
    label,
    id,
    required,
    ...props
},
    ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;

    return (
        <div className={`${styles.inputWrapper} ${className ?? ""}`}>
            {label && <label className={styles.label} htmlFor={selectId}>{label}
                {required && ' *'}</label>}
            <textarea
                id={selectId}
                {...props}
                value={value}
                ref={ref}
                maxLength={maxLength}
                className={styles.textarea}
                onChange={onChange}
            />

            {showCounter && maxLength && (
                <div className={styles.counter}>
                    {String(value ?? "").length}/{maxLength}
                </div>
            )}

            <div className={styles.resizeIcon}>
                <ResizeTextarea />
            </div>
        </div>
    );
}
);

export default Textarea;