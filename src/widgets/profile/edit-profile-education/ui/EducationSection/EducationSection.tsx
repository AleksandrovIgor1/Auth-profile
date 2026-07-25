import Education from '../Education/Education';
import styles from './styles.module.css';

const EducationSection = () => {

    return (
        <form className={styles.container}>
            <div className={styles.educations}>
                <Education />
                {/* <AddJob /> */}
            </div>
            <button className={styles.saveButton} type='submit'>Сохранить</button>
        </form>
    );
};

export default EducationSection