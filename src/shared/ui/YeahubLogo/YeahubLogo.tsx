import React from 'react'
import styles from './styles.module.css';
import Yeahub from '@/shared/icons/Yeahub.svg?react'
import YeahubProfile from '@/shared/logos/YeahubProfile.svg?react'

const YeahubLogo = () => {
    return (
        <div className={styles.logos}>
            <Yeahub />
            <YeahubProfile />
        </div>
    )
}

export default YeahubLogo