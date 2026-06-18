import { ProfileCard } from "@/entities/profile";
import { useGetProfileQuery } from "@/entities/profile/api/profileApi";

const Candidate = () => {
    const { data: profile, error, isLoading } = useGetProfileQuery();

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка загрузки профиля</div>;
    }

    if (!profile) {
        return null;
    }

    return <ProfileCard profile={profile} />
}

export default Candidate