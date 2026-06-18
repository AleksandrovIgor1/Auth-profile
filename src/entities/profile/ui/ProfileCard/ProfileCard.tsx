import styles from './styles.module.css';
import Social from '@/shared/icons/Socail.svg?react';
import Instagram from '@/shared/icons/Instagram.svg?react';
import Pinterest from '@/shared/icons/Pinterest.svg?react';
import Behance from '@/shared/icons/Behance.svg?react';
import Mail from '@/shared/icons/Mail.svg?react';
import LinkedIn from '@/shared/icons/LinkedIn.svg?react';
import type { User } from '../../model/types';

interface ProfileCardProps {
    profile: User
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
    const { username } = profile;

    return (
        <div className={styles.container}>
            <div className={styles.aside}>
                <img src="" alt="" />
                <p className={styles.format}>Удаленно, Part-time, Freelance</p>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.infoSection}>
                    <div className={styles.headerInfo}>
                        <h2 className={styles.name}>{username}</h2>
                        <span className={styles.candidate}>Кандидат</span>
                    </div>
                    <div className={styles.info}>
                        <p>age</p>
                        <p>UX/UI Дизайнер в Яндекс</p>
                        <p className={styles.experience}>Опыт: 7 лет</p>
                        <p className={styles.location}>Москва, Россия</p>
                    </div>
                </div>
                <div className={styles.socialMedias}>
                    <Social />
                    <Instagram />
                    <Pinterest />
                    <Behance />
                    <Mail />
                    <LinkedIn />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard