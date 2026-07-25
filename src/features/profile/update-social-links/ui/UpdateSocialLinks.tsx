import { TextField } from '@/shared/ui/TextField/TextField';
import styles from './styles.module.css';
import { useFormContext } from 'react-hook-form';
import { SOCIAL_ROWS } from '../model/socialPlatforms';


const UpdateSocialLinks = () => {
    const { register } = useFormContext();

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>Личные ссылки</h2>
                <p>
                    Поделитесь своими профилями <br />
                    в других соц. сетях
                </p>
            </div>

            <div className={styles.form}>
                <div className={styles.inputContainer}>
                    {SOCIAL_ROWS.map((row) => (
                        <div key={row.join('-')} className={styles.row}>
                            {row.map((social) => (
                                <TextField
                                    key={social.code}
                                    label={social.title}
                                    {...register(`socials.${social.code}`)} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpdateSocialLinks;