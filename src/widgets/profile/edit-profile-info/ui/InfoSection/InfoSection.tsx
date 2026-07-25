import NextButton from "@/shared/ui/NextButton/NextButton";
import styles from './styles.module.css';
import UpdateAvatar from "@/features/profile/update-avatar/ui/UpdateAvatar/UpdateAvatar";
import { useEffect } from "react";
import { useGetProfileQuery, useUpdateUserMutation } from "@/entities/profile/api/profileApi";
import { FormProvider, useForm } from "react-hook-form";
import type { InfoFormValues } from "../../model/types";
import UpdatePersonalInfo from "@/features/profile/update-personal-info/ui/UpdatePersonalInfo";
import UpdateSocialLinks from "@/features/profile/update-social-links/ui/UpdateSocialLinks";
import { formToSocialNetwork, socialNetworkToForm } from "../../model/socialMapper";
import { useOutletContext } from "react-router-dom";
import type { StepNavigationContext } from "@/shared/lib/step-navigation/types";
import { useSaveProfile } from "@/entities/profile/lib/useSaveProfile";


const InfoSection = () => {
    const { data: profile, isLoading } = useGetProfileQuery();

    const [updateUser] = useUpdateUserMutation();

    const methods = useForm<InfoFormValues>();

    const {
        handleSubmit,
        reset,
    } = methods;

    const { next } = useOutletContext<StepNavigationContext>();
    const { saveProfile } = useSaveProfile();

    useEffect(() => {
        if (!profile) return;

        const currentProfile = profile.profiles[0];

        reset({
            username: profile.username,
            address: profile.address,
            socials: socialNetworkToForm(currentProfile.socialNetwork),
            specializationId: currentProfile.specializationId
        });
    }, [profile, reset]);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return null;
    }


    const onSubmit = async (data: InfoFormValues) => {

        const userDto = {
            username: data.username,
            address: data.address,
        };

        await Promise.all([
            updateUser({
                id: profile.id,
                data: userDto,
            }).unwrap(),

            saveProfile({
                socialNetwork: formToSocialNetwork(data.socials),
                specializationId: data.specializationId

            }),
        ])

        next()
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.contentWrapper}>
                    <UpdateAvatar />
                    <UpdatePersonalInfo />
                    <UpdateSocialLinks />
                </div>
                <NextButton type="submit" />
            </form>
        </FormProvider>
    );
};

export default InfoSection