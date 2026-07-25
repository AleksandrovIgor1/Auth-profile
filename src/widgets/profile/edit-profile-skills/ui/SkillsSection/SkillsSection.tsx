import { Select } from '@/shared/ui';
import CancelSelected from '@/shared/icons/CancelSelected.svg?react';
import styles from './styles.module.css';
import NextButton from '@/shared/ui/NextButton/NextButton';
import { useSaveProfile } from '@/entities/profile/lib/useSaveProfile';
import { useGetProfileQuery, useGetSkillsQuery } from '@/entities/profile/api/profileApi';
import { useFieldArray, useForm } from 'react-hook-form';
import type { SkillsFormValues } from '../../model/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';

const SkillsSection = () => {
    const { data: profile, isLoading } = useGetProfileQuery();

    const { data: skills } = useGetSkillsQuery();
    const allSkills = skills?.data ?? [];
    const skillOptions =
        allSkills.map(item => ({
            value: item.id.toString(),
            label: item.title,
        }));

    const { saveProfile } = useSaveProfile();

    const navigate = useNavigate()


    const methods = useForm<SkillsFormValues>();

    const {
        handleSubmit,
        reset,
        control
    } = methods;

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "profileSkills",
        keyName: "fieldId",
    });
    const currentProfile = profile?.profiles[0];

    useEffect(() => {
        if (!currentProfile) return;

        reset({
            profileSkills: currentProfile.profileSkills,
        });
    }, [currentProfile, reset]);


    if (isLoading) return <div>Loading...</div>;
    if (!currentProfile) return null;



    const onSubmit = async (data: SkillsFormValues) => {

        await saveProfile({
            profileSkills: data.profileSkills.map(skill =>
                skill.id.toString()
            ),
        });
        navigate(ROUTES.PROFILE)
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.contentWrapper}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Твои навыки</h2>
                    <p className={styles.text}>Покажи что ты умеешь <br /> и в чём ты действительно хорош</p>
                </div>
                <div className={styles.main}>
                    <div className={styles.selectWrapper}>
                        <Select
                            required={false}
                            onChange={(e) => {
                                const id = Number(e.target.value);
                                const skillsMap = new Map(
                                    allSkills.map(skill => [skill.id, skill])
                                );
                                const skill = skillsMap.get(id);

                                if (!skill) return;

                                const exists = fields.some(s => s.id === skill.id);

                                if (!exists) {
                                    append(skill);
                                }
                            }}
                            label='Навык'
                            options={skillOptions}
                        />
                    </div>
                    <div className={styles.selectedWrapper}>
                        <p>Выбранные навыки</p>
                        <ul className={styles.selectedSkills}>
                            {fields.map((skill, index) => (
                                <li className={styles.skill} key={skill.id}>
                                    <div className={styles.skillConainer}>
                                        <img
                                            src={skill.imageSrc}
                                            alt={skill.title}
                                            className={styles.skillIcon}
                                        />
                                        {skill.title}
                                    </div>
                                    <CancelSelected onClick={() => remove(index)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <NextButton type='submit' />
        </form>
    );
};

export default SkillsSection