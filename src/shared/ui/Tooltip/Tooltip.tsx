import { useState, type ReactNode } from 'react'
import styles from './styles.module.css';

interface TooltipProps {
    children: ReactNode;
    tip?: string;
}

export const Tooltip = ({ children }: TooltipProps) => {
    const [opened, setOpened] = useState(false);


    return (
        <div className={styles.wrapper}
            onMouseEnter={() => setOpened(true)}
            onMouseLeave={() => setOpened(false)}>
            {children}
            {opened && (
                <div className={styles.tooltip}>
                    <h2>Просто красавчик!</h2>
                    <p>За участие и/или организацию <br /> 10 и более мероприятий</p>
                </div>
            )}
        </div>
    )
}
