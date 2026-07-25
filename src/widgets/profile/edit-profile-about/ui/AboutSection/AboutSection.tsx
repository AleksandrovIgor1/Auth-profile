import { useEffect } from 'react';
import styles from './styles.module.css';
import Textarea from '@/shared/ui/Textarea/Textarea';
import NextButton from '@/shared/ui/NextButton/NextButton';
import { useSaveProfile } from '@/entities/profile/lib/useSaveProfile';
import { useOutletContext } from 'react-router-dom';
import type { StepNavigationContext } from '@/shared/lib/step-navigation/types';
import { useForm } from 'react-hook-form';
import type { AboutFormValues } from '../../model/types';
import { useGetProfileQuery } from '@/entities/profile/api/profileApi';

const AboutSection = () => {
    const { data: profile, isLoading } = useGetProfileQuery();
    const { saveProfile } = useSaveProfile();
    const { next } = useOutletContext<StepNavigationContext>();

    const methods = useForm<AboutFormValues>();

    const {
        handleSubmit,
        reset,
        register
    } = methods;

    useEffect(() => {
        if (!profile) return;

        const currentProfile = profile.profiles[0];

        reset({
            description: currentProfile.description,
        });
    }, [profile, reset]);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return null;
    }

    const onSubmit = async (data: AboutFormValues) => {
        console.log("onSubmit", data);
        await saveProfile({
            description: data.description,
        });

        next();
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.contentWrapper}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>О себе любимом(-ой)</h2>
                    <p className={styles.text}>Расскажи о себе всему сообществу. Мы ценим человека <br /> не за его профессиональные качества, поэтому пиши <br /> всё чем хочешь поделиться</p>
                </div>
                <Textarea
                    {...register('description')}
                    maxLength={1000}
                    placeholder="Расскажи о себе..."
                />
            </div>
            <NextButton type='submit' />
        </form>
    );
};

export default AboutSection;