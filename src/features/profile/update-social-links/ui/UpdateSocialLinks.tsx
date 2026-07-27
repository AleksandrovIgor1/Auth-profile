import { TextField } from '@/shared/ui/TextField/TextField';
import styles from './styles.module.css';
import { useFormContext } from 'react-hook-form';
import { SOCIAL_ROWS } from '../model/socialPlatforms';
import type { InfoFormValues } from '@/entities/profile/model/types';


const UpdateSocialLinks = () => {
    const { register } = useFormContext<InfoFormValues>();

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
                        <div key={row.map((social) => social.code).join('-')} className={styles.row}>
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