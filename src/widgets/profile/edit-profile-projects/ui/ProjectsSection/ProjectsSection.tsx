import ProjectForm from '../ProjectForm/ProjectForm';
import styles from './styles.module.css';
import Add from '@/shared/icons/Add.svg?react';

const ProjectsSection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Твои проекты</h2>
                    <p className={styles.text}>Вау, а ты хорош</p>
                </div>
                <button className={styles.addButton}><Add /><span>Добавить</span></button>
            </div>
            <div className={styles.projects}>
                <ProjectForm />
                <ProjectForm />
            </div>
        </div>
    );
};

export default ProjectsSection