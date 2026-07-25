import React, { forwardRef, useId } from 'react'
import styles from './styles.module.css';
import SelectArrow from '@/shared/icons/SelectArrow.svg?react';

interface OptionProps {
    value: string;
    label: string;
    disabled?: boolean;
}

interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: OptionProps[];
    disabled?: boolean;
    required?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
    label,
    options,
    className,
    id,
    required,
    ...props
}, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;

    return (
        <div className={styles.wrapper}>
            {label && (
                <label
                    htmlFor={selectId}
                    className={styles.label}
                >
                    {label}
                </label>
            )}
            <div className={styles.container}>
                <select
                    required={required}
                    ref={ref}
                    id={selectId}

                    className={`${styles.select} ${className ?? ""}`}
                    {...props}
                >
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                <SelectArrow className={styles.arrow} />
            </div>
        </div>
    )
})

export default Select