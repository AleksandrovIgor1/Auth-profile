import { useGetSpecializationsQuery } from '@/entities/profile/api/profileApi';
import styles from './styles.module.css';
import Flag from '@/shared/icons/Flag.svg?react';
import { Select } from '@/shared/ui';
import { TextField } from '@/shared/ui/TextField/TextField';
import { Controller, useFormContext } from 'react-hook-form';


const UpdatePersonalInfo = () => {
    const { register, control } = useFormContext();
    const { data: specializations } = useGetSpecializationsQuery();
    const allSpecializations = specializations?.data ?? [];
    const specializationOptions =
        allSpecializations.map(item => ({
            value: item.id.toString(),
            label: item.title,
        }));

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>Персональная информация</h2>
                <p>Поделитесь своими профилями <br /> в других соц. сетях</p>
            </div>

            <div className={styles.form}>
                <div className={styles.half}>
                    <TextField
                        {...register("username")}
                        label="Никнейм"
                        required
                    />
                </div>

                <div className={styles.row}>
                    <div>
                        <Controller
                            name="specializationId"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="IT Специальность"
                                    required
                                    options={specializationOptions}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <p className={styles.changeSpecialization}>
                            Сменить специальность
                        </p>
                    </div>

                    <div className={styles.phoneField}>
                        <label htmlFor="tel">Номер для связи</label>
                        <div className={styles.phone}>
                            <Flag className={styles.flag} />
                            <input
                                type="tel"
                                placeholder="+7 000 000-00-00"
                                className={styles.phoneInput}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <TextField
                        label="Email"
                        type="email"
                    />

                    <TextField
                        label="Локация"
                        placeholder="Напр. Санкт-Петербург, Россия"
                        {...register("address")}
                    />
                </div>

                <div className={styles.half}>
                    <Select
                        label='Уровень специалиста'
                        options={[
                            {
                                value: "Junior",
                                label: "Junior",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default UpdatePersonalInfo