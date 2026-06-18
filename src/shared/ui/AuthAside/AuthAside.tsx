import styles from './styles.module.css';
import Yeahub from '@/shared/logos/Yeahub.svg?react'
import CheckCircle from '@/shared/icons/CheckCircle.svg?react'


const AuthAside = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Yeahub />
                <p className={styles.headerTitle}>YeaHub объединяет IT-специалистов</p>
            </div>
            <div className={styles.benefits}>
                <h2 className={styles.benefitsTitle}>Стань частью сообщества <br /> YeaHub и получи:</h2>
                <ul className={styles.benefitsList}>
                    <li className={styles.benefitsItem}><CheckCircle /> <span>Пошаговый план обучения</span></li>
                    <li className={styles.benefitsItem}><CheckCircle /> <span>Карьерный рост</span></li>
                    <li className={styles.benefitsItem}><CheckCircle /> <span>Большое сообщество специалистов</span></li>
                    <li className={styles.benefitsItem}><CheckCircle /> <span>Обучение с ментором</span></li>
                    <li className={styles.benefitsItem}><CheckCircle /> <span>Возможность прохождения стажировки</span></li>
                </ul>
            </div>

        </div>
    )
}

export default AuthAside