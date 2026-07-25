import styles from './styles.module.css';
import { TextField } from '@/shared/ui/TextField/TextField';
import { useState } from 'react';
import Textarea from '@/shared/ui/Textarea/Textarea';
import ImageUploader from '@/shared/ui/ImageUploader/ImageUploader';

const ProjectForm = () => {
    const [value, setValue] = useState("");

    return (
        <form className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Добавить проект</h2>
                <p className={styles.text}>Советуем тебе придумать красивую обложку, ибо, по нашим наблюдениям, HR очень <br /> на них падки</p>
            </div>
            <div className={styles.project}>
                <ImageUploader />
                <div className={styles.form}>
                    <div className={styles.formInputs}>
                        <div className={styles.row}>
                            <TextField label='Название проекта' required />
                            <TextField label='Ссылка на проект проекта' required />
                        </div>
                        <Textarea
                            label='Описание проекта'
                            required
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            maxLength={1000}
                            placeholder="Расскажи чуть подробнее о проекте"
                        />
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.deleteButton}>Удалить</button>
                        <button className={styles.saveButton} type='submit'>Сохранить</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProjectForm