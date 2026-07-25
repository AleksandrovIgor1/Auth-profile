import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import EditButton from '@/shared/icons/EditButton.svg?react';
import CompanyLogo from '@/shared/icons/CompanyLogo.svg?react';
import Ellipse from '@/shared/icons/Ellipse.svg?react';
import { ROUTES } from '@/shared/config/routes';
import Collapse from '@/shared/ui/Collapse/Collapse';


const WorkExperience = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                    <h3>Опыт работы</h3>
                    <span className={styles.experience}>4 года 7 месяцев</span>
                </div>
                <EditButton onClick={() => navigate(ROUTES.EDIT_PROFILE)} />
            </div>
            <Collapse height={190}>
                <div className={styles.works}>
                    <div className={styles.workContainer}>
                        <CompanyLogo />
                        <div className={styles.work}>
                            <h2 className={styles.workTitle}>UX/UI дизайнер</h2>
                            <div className={styles.workInfo}>
                                <p className={styles.companyInfo}>
                                    <span className={styles.workName}>Яндекс</span>
                                    <Ellipse />
                                    <span className={styles.time}>
                                        Full-time
                                    </span>
                                    <Ellipse />
                                    <span className={styles.workDuration}>Фев 2023 — настоящее время (1 год 4 месяца)</span>
                                </p>
                                <p className={styles.location}>Москва, Россия</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.workContainer}>
                        <CompanyLogo />
                        <div className={styles.work}>
                            <h2 className={styles.workTitle}>UX/UI дизайнер</h2>
                            <div className={styles.workInfo}>
                                <p className={styles.companyInfo}>
                                    <span className={styles.workName}>Яндекс</span>
                                    <Ellipse />
                                    <span className={styles.time}>
                                        Full-time
                                    </span>
                                    <Ellipse />
                                    <span className={styles.workDuration}>Фев 2023 — настоящее время (1 год 4 месяца)</span>
                                </p>
                                <p className={styles.location}>Москва, Россия</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.workContainer}>
                        <CompanyLogo />
                        <div className={styles.work}>
                            <h2 className={styles.workTitle}>UX/UI дизайнер</h2>
                            <div className={styles.workInfo}>
                                <p className={styles.companyInfo}>
                                    <span className={styles.workName}>Яндекс</span>
                                    <Ellipse />
                                    <span className={styles.time}>
                                        Full-time
                                    </span>
                                    <Ellipse />
                                    <span className={styles.workDuration}>Фев 2023 — настоящее время (1 год 4 месяца)</span>
                                </p>
                                <p className={styles.location}>Москва, Россия</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default WorkExperience