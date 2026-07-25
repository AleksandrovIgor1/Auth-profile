import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import EditButton from '@/shared/icons/EditButton.svg?react';
import { ROUTES } from '@/shared/config/routes';
import Collapse from '@/shared/ui/Collapse/Collapse';
import type { Profile } from '@/entities/profile/model/types';

interface AboutMeProps {
    profile: Profile
}

const AboutMe = ({ profile }: AboutMeProps) => {
    const navigate = useNavigate();


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Обо мне</h3>
                <EditButton onClick={() => navigate(ROUTES.EDIT_PROFILE_ABOUT)} />
            </div>
            <Collapse>
                <p className={styles.text}>
                    {profile.description}
                </p>
            </Collapse>
        </div>
    )
}

export default AboutMe