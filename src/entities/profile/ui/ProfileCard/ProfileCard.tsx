import styles from './styles.module.css';
import VerifiedEmail from '@/shared/icons/VerifiedEmail.svg?react';
import InProgressEmail from '@/shared/icons/InProgressEmail.svg?react';
import EditButton from '@/shared/icons/EditButton.svg?react';
import Avatar from '@/shared/logos/Avatar.svg?react';
import type { Profile, User } from '../../model/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import { calculateAge } from '../../lib/calculateAge';
import { socialConfig } from '../../lib/socials';
import { useGetSpecializationByIdQuery } from '../../api/profileApi';

interface ProfileCardProps {
    user: User,
    profile: Profile
}

const ProfileCard = ({ user, profile }: ProfileCardProps) => {
    const { username, email, phone, address, birthday, avatarUrl, isVerified } = user;

    const { data: specialization } = useGetSpecializationByIdQuery(profile.specializationId)

    const age = calculateAge(birthday);
    const socialNetwork = profile?.socialNetwork ?? [];

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.aside}>
                <div className={styles.avatarContainer}>
                    {avatarUrl ? <img
                        src={avatarUrl}
                        alt={`${username} avatar`}
                        loading="lazy"
                        className={styles.avatar}
                    /> : <Avatar className={styles.placeholder} />}
                </div>
                <p className={styles.format}>Удаленно, Part-time, <br />Freelance</p>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.infoSection}>
                    <div className={styles.headerContainer}>
                        <div className={styles.header}>
                            <h1 className={styles.name}>{username}</h1>
                            <p className={styles.candidate}>Кандидат</p>
                        </div>
                        <EditButton className={styles.editButton} onClick={() => navigate(ROUTES.EDIT_PROFILE)} />
                    </div>
                    <div className={styles.info}>
                        <p>{age !== undefined ? `${age} лет` : null}</p>
                        <p>{specialization?.title}</p>
                        <p className={styles.experience}>Опыт: 7 лет</p>
                        <p className={styles.location}>{address}</p>
                    </div>
                </div>
                <div className={styles.contactsContainer}>
                    <div className={styles.contacts}>
                        {phone}
                        <div className={styles.email}>
                            {isVerified ? (
                                <>
                                    <VerifiedEmail />
                                    <span>{email}</span>
                                </>
                            ) : (
                                <>
                                    <InProgressEmail />
                                    <span>Подтвердить email</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={styles.socialMedias}>
                        {socialNetwork
                            .filter(({ title }) => title.trim() !== "")
                            .map(({ code, title }) => {
                                const config = socialConfig[code];

                                if (!config) {
                                    return null;
                                }

                                const { Icon, getUrl } = config;

                                return (
                                    <a
                                        key={code}
                                        href={getUrl(title)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard