import styles from './styles.module.css';
import Megaphone from '@/shared/icons/Megaphone.svg?react';
import Chat from '@/shared/icons/Chat.svg?react';
import YeahubMentors from '@/shared/icons/YeahubMentors.svg?react';
import Mentor from '@/shared/icons/Mentor.svg?react';
import SocialLinks from '@/shared/icons/SocialLinks.svg?react';

const Aside = () => {
    return (
        <div className={styles.asideContainer}>
            <div className={styles.callToAction}>
                <div className={styles.callToActionHeader}>
                    <h2 className={styles.h2}>YeaHub объединяет IT-специалистов</h2>
                    <p className={styles.callToActionText}>Подпишитесь на наш канал и станьте частью IT-сообщества, которое растёт вместе с вами.</p>
                </div>
                <div className={styles.callToActionLinks}>
                    <div className={styles.yeahub}>
                        <Megaphone /><span>YeaHub: Главные новости и обновления платформы</span>
                    </div>
                    <div className={styles.yeahubCommunity}>
                        <Chat /><span>YeaHub Community: Общение, обмен опытом и поддержка единомышленников</span>
                    </div>
                </div>
            </div>
            <div className={styles.mentorsContainer}>
                <div className={styles.mentorsContainerHeader}>
                    <YeahubMentors /><h2 className={styles.h2}>Они развивают платформу вместе с нами</h2>
                </div>
                <div className={styles.mentors}>
                    <div className={styles.mentor}>
                        <Mentor />
                        <div className={styles.mentorContent}>
                            <h3 className={styles.h3}>Frontend Guru</h3>
                            <p className={styles.mentorName}>Ruslan kuyanets</p>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className={styles.mentor}>
                        <Mentor />
                        <div className={styles.mentorContent}>
                            <h3 className={styles.h3}>Frontend Guru</h3>
                            <p>Ruslan kuyanets</p>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className={styles.mentor}>
                        <Mentor />
                        <div className={styles.mentorContent}>
                            <h3 className={styles.h3}>Frontend Guru</h3>
                            <p>Ruslan kuyanets</p>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className={styles.mentor}>
                        <Mentor />
                        <div className={styles.mentorContent}>
                            <h3 className={styles.h3}>Frontend Guru</h3>
                            <p>Ruslan kuyanets</p>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside