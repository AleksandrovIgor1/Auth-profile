import styles from './styles.module.css';
import { TextField } from '@/shared/ui/TextField/TextField';
import { Select } from '@/shared/ui';
import ImageUploader from '@/shared/ui/ImageUploader/ImageUploader';

const Education = () => {

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Где ты учился(-ась)</h2>
                <p className={styles.text}>Мы понимаем что в IT образование уступает в приоритете навыкам, но это так же важно.</p>
            </div>
            <div className={styles.form}>
                <ImageUploader />
                <div className={styles.formInputs}>
                    <div className={styles.row}>
                        <TextField
                            label="Учебное заведение"
                            required
                        />
                        <Select
                            label='Уровень'
                            required
                            options={[
                                {
                                    value: "",
                                    label: "React Frontend Developer",
                                },
                            ]}
                        />
                    </div>
                    <div className={styles.row}>
                        <Select
                            label='Специальность'
                            required
                            options={[
                                {
                                    value: "",
                                    label: "Full-time",
                                },
                            ]}
                        />
                        <TextField
                            label="Начало обучения"
                        />
                    </div>

                    <div className={styles.half}>
                        <div className={styles.smallContainer}>
                            <TextField
                                label="Конец обучения"
                                required
                            />
                            <small className={styles.note}>Если учитесь в настоящее время — укажите <br />год предполагаемого окончания</small>
                        </div>
                    </div>
                </div>
                <button className={styles.deleteButton}>Удалить место работы</button>
                <button className={styles.addButton}>Добавить ещё одно место работы</button>
            </div>
        </div>
    )
}

export default Education