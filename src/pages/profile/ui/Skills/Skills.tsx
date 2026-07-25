import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import type { Profile } from '@/entities/profile/model/types';
import { ROUTES } from '@/shared/config/routes';
import EditButton from '@/shared/icons/EditButton.svg?react'

interface SkillsProps {
    profile: Profile;
}

const Skills = ({ profile }: SkillsProps) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Навыки</h3>
                <EditButton onClick={() => navigate(ROUTES.EDIT_PROFILE_SKILLS)} />
            </div>
            <div className={styles.skills}>
                {profile.profileSkills.map(skill => (
                    <div className={styles.skill}>
                        <img src={skill.imageSrc} />
                        {skill.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills