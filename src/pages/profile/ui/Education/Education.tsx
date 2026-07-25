import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import EditButton from '@/shared/icons/EditButton.svg?react';
import Ellipse from '@/shared/icons/Ellipse.svg?react';
import { ROUTES } from '@/shared/config/routes';
import Collapse from '@/shared/ui/Collapse/Collapse';


const Education = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Образование</h3>
                <EditButton onClick={() => navigate(ROUTES.EDIT_PROFILE)} />
            </div>
            <Collapse >
                <div className={styles.educations}>
                    <div className={styles.education}>
                        <h2 className={styles.educationTitle}>Технический университет г. Брно</h2>
                        <p className={styles.educationInfo}>
                            <span className={styles.educationName}>Инженер промышленного оборудования</span>
                            <Ellipse />
                            <span className={styles.academicDegree}>
                                Бакалавр
                            </span>
                            <Ellipse />
                            <span className={styles.educationDuration}>2020–2023</span>
                        </p>
                    </div>
                    <div className={styles.education}>
                        <h2 className={styles.educationTitle}>Технический университет г. Брно</h2>
                        <p className={styles.educationInfo}>
                            <span className={styles.educationName}>Инженер промышленного оборудования</span>
                            <Ellipse />
                            <span className={styles.academicDegree}>
                                Бакалавр
                            </span>
                            <Ellipse />
                            <span className={styles.educationDuration}>2020–2023</span>
                        </p>
                    </div>
                </div>
            </Collapse >
        </div >
    )
}

export default Education