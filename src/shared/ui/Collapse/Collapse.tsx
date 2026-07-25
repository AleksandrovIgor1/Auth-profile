import { useState, type ReactNode } from 'react';
import styles from './styles.module.css';
import CollapseExpandArrow from '@/shared/icons/CollapseExpandArrow.svg?react';

interface CollapseProps {
    height?: number;
    children: ReactNode;
}

const Collapse = ({ height = 120, children }: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <>
            <div className={`${styles.content} ${isOpen && styles.contentOpen}`} style={{
                maxHeight: isOpen
                    ? '1000px'
                    : `${height}px`,
            }}>
                {children}
            </div>
            <button className={styles.collapseExpandButton} onClick={handleToggle}>
                <span>{isOpen ? "Свернуть" : "Развернуть"}</span>
                <CollapseExpandArrow className={`${styles.expand} ${isOpen ? styles.collapse : ""}`} />
            </button>
        </>
    )
}

export default Collapse