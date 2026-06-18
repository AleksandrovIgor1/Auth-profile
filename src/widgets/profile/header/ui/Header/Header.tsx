import styles from './styles.module.css'
import Settings from '@/shared/icons/Settings.svg?react'
import ProfilePhoto from '@/shared/logos/ProfilePhoto.svg?react'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Settings />
                <ProfilePhoto />
            </div>
        </div>
    )
}

export default Header