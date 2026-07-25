import styles from './styles.module.css';
import Achievements from './Achievements/Achievements';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import WorkExperience from './WorkExperience/WorkExperience';
import Education from './Education/Education';
import { useGetProfileQuery } from '@/entities/profile/api/profileApi';
import { ProfileCard } from '@/entities/profile';

const Profile = () => {
    const { data: user, error, isLoading } = useGetProfileQuery();

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка загрузки профиля</div>;
    }

    if (!user) {
        return null;
    }

    const currentProfile = user.profiles[0];

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <ProfileCard profile={currentProfile} user={user} />
                <AboutMe profile={currentProfile} />
                <Skills profile={currentProfile} />
                <Projects />
                <WorkExperience />
                <Education />
            </div>
            <div className={styles.aside}>
                <Achievements />
            </div>
        </div>
    )
}

export default Profile