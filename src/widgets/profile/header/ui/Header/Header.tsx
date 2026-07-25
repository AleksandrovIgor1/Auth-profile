import styles from './styles.module.css'
import Settings from '@/shared/icons/Settings.svg?react'
import ProfilePhoto from '@/shared/logos/ProfilePhoto.svg?react'
import Collapse from '@/shared/icons/Collapse.svg?react'
import Yeahub from '@/shared/icons/Yeahub.svg?react'

interface AsideProps {
    onMenuClick: () => void;
}

const Header = ({ onMenuClick }: AsideProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.navigationSection}>
                <Yeahub />
                <Collapse className={styles.icon} onClick={onMenuClick} />
            </div>
            <div className={styles.wrapper}>
                <Settings />
                <ProfilePhoto />
            </div>
        </div>
    )
}

export default Header