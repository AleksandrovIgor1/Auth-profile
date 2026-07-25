import styles from './styles.module.css';
import { TextField } from '@/shared/ui/TextField/TextField';
import { Select } from '@/shared/ui';

const JobForm = () => {
    const isLast = true

    return (
        <form className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Где ты работал(-а)</h2>
                <p className={styles.text}>Сюда мы тоже что‑нибудь классное придумаем</p>
            </div>
            <div className={styles.form}>
                <div className={styles.formInputs}>
                    <TextField label='Название проекта' required />
                    <Select
                        label='Позиция'
                        required
                        options={[
                            {
                                value: "",
                                label: "UX/UI Дизайнер",
                            },
                        ]}
                    />
                    <Select
                        label='Занятость'
                        required
                        options={[
                            {
                                value: "",
                                label: "Full-time",
                            },
                        ]}
                    />
                    <TextField label='Начало работы' required />
                    <TextField label='Окончание работы' required placeholder='ММ.ГГГГ' disabled />
                </div>
                <div className={styles.optionsWrapper}>
                    <div className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>По настоящее время работы</span>
                    </div>
                    <button className={styles.deleteButton}>Удалить место работы</button>
                    {isLast && <button className={styles.addButton}>Добавить ещё одно место работы</button>}
                </div>
            </div>
        </form>
    )
}

export default JobForm