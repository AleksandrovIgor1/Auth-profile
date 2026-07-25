import NextArrow from '@/shared/icons/NextArrow.svg?react'
import styles from './styles.module.css';
interface NextButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const NextButton = ({ disabled = false, type = 'button', onClick }: NextButtonProps) => {
    return <button className={styles.button} type={type}
        disabled={disabled}
        onClick={onClick}><span>Далее</span><NextArrow className={styles.nextIcon} /></button>

}

export default NextButton