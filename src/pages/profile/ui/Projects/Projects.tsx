import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import EditButton from '@/shared/icons/EditButton.svg?react';
import SliderArrow from '@/shared/icons/SliderArrow.svg?react';
import { ROUTES } from '@/shared/config/routes';
import { useHorizontalScroll } from '@/shared/lib/useHorizontalScroll';


const Projects = () => {
    const navigate = useNavigate();
    const {
        ref,
        canScrollLeft,
        canScrollRight,
        checkScroll,
        scrollLeft,
        scrollRight,
    } = useHorizontalScroll(200);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Проекты</h3>
                <div className={styles.navButtons}>
                    <p className={styles.showAll}>Показать все</p>
                    <EditButton onClick={() => navigate(ROUTES.EDIT_PROFILE)} />
                </div>
            </div>
            <div className={styles.projectsContainer}>
                <div className={styles.projects} ref={ref} onScroll={checkScroll}>
                    <div className={styles.project}>
                        <div className={styles.img} />
                        <p className={styles.text}>Clinically — clinic & health care website</p>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.img} />
                        <p className={styles.text}>Clinically — clinic & health care website</p>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.img} />
                        <p className={styles.text}>Clinically — clinic & health care website</p>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.img} />
                        <p className={styles.text}>Clinically — clinic & health care website</p>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.img} />
                        <p className={styles.text}>Clinically — clinic & health care website</p>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.img} />
                        <p className={styles.text}>Clinically — clinic & health care website</p>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.img} />
                        <p className={styles.text}>Clinically — clinic & health care website</p>
                    </div>
                </div>
                {canScrollLeft && <button onClick={scrollLeft} className={`${styles.arrow} ${styles.leftArrow}`}>
                    <SliderArrow />
                </button>}
                {canScrollRight && <button onClick={scrollRight} className={`${styles.arrow} ${styles.rightArrow}`}>
                    <SliderArrow />
                </button>}
            </div>
        </div>
    )
}

export default Projects