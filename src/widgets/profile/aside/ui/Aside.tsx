import React from 'react'

import styles from './styles.module.css';
import Collapse from '@/shared/icons/Collapse.svg?react'
import Yeahub from '@/shared/icons/Yeahub.svg?react'
import Home from '@/shared/icons/Home.svg?react'
import MyProfile from '@/shared/icons/MyProfile.svg?react'
import Learning from '@/shared/icons/Learning.svg?react'
import Blog from '@/shared/icons/Blog.svg?react'
import Mentors from '@/shared/icons/Mentors.svg?react'
import KnowledgeBase from '@/shared/icons/KnowledgeBase.svg?react'
import Analytics from '@/shared/icons/Analytics.svg?react'
import Support from '@/shared/icons/Support.svg?react'
import ArrowDownAside from '@/shared/icons/ArrowDownAside.svg?react'
import YeahubProfile from '@/shared/logos/YeahubProfile.svg?react'
import { Logout } from '@/features/auth/logout';

const Aside = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logos}>
                    <Yeahub />
                    <YeahubProfile />
                </div>
                <Collapse />
            </div>
            <ul className={styles.list}>
                <li className={styles.item}><Home /><span className={styles.itemTitle}>Главная</span></li>
                <li className={`${styles.item} ${styles.itemActive}`}><MyProfile /><span className={styles.itemTitle}>Мой профиль</span></li>
                <li className={styles.item}><Learning /><span className={styles.itemTitle}>Обучение</span><ArrowDownAside /></li>
                <li className={styles.item}><Blog /><span className={styles.itemTitle}>Блог</span><ArrowDownAside /></li>
                <li className={styles.item}><Mentors /><span className={styles.itemTitle}>Менторы</span><ArrowDownAside /></li>
                <li className={styles.item}><KnowledgeBase /><span className={styles.itemTitle}>База знаний</span><ArrowDownAside /></li>
                <li className={styles.item}><Analytics /><span className={styles.itemTitle}>Аналитика</span></li>
            </ul>
            <div className={styles.footer}>
                <button className={styles.supportButton}><Support /><span>Поддержка</span></button>
                <Logout />
            </div>
        </div>
    )
}

export default Aside