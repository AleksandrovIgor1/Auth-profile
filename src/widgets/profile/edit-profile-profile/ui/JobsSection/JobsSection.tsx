import JobForm from '../JobForm/JobForm';
import styles from './styles.module.css';

const JobsSection = () => {

    return (
        <form className={styles.container}>
            <div className={styles.jobs}>
                {/* {jobs.map((job, index) => (
                    <JobForm key={job.id} job={job} isLast={index === jobs.length - 1}/>
                ))} */}
                <JobForm />
            </div>
            <button className={styles.saveButton} type='submit'>Сохранить</button>
        </form>
    );
};

export default JobsSection