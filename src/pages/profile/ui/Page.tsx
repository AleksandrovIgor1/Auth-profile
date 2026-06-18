import React from 'react'
import styles from './styles.module.css';
import { Aside } from '@/widgets/profile/aside';
import Header from '@/widgets/profile/header/ui/Header/Header';
import Candidate from './Candidate/Candidate';

const Profile = () => {
    return (
        <div className={styles.page}>
            <Aside />
            <div className={styles.content}>
                <Header />
                <main className={styles.main}>
                    <Candidate />
                </main>
            </div>
        </div>
    )
}

export default Profile