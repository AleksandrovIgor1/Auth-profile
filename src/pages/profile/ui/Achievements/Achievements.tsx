import AchievementsArrow from '@/shared/icons/AchievementsArrow.svg?react';
import styles from './styles.module.css';
import { Tooltip } from '@/shared/ui/Tooltip/Tooltip';

const Achievements = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Достижения <span>(4)</span></p>
                <div className={styles.icons}>
                    <AchievementsArrow className={styles.prev} />
                    <AchievementsArrow className={styles.next} />
                </div>
            </div>
            <div className={styles.achievements}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Tooltip tip='' key={index}>
                        <div className={styles.achievement} />
                    </Tooltip>
                ))}
            </div>
        </div>
    )
}

export default Achievements