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
import CollapsedAside1 from '@/shared/icons/CollapsedAside1.svg?react'
import CollapsedAside2 from '@/shared/icons/CollapsedAside2.svg?react'
import { Logout } from '@/features/auth/logout';
import { useState } from 'react';
import { useMediaQuery } from '@/shared/lib/useMediaQuery';

interface AsideProps {
    open: boolean;
}

const menuItems = [
    {
        key: 'learning',
        title: 'Обучение',
        icon: <Learning />,
    },
    {
        key: 'blog',
        title: 'Блог',
        icon: <Blog />,
    },
    {
        key: 'mentors',
        title: 'Менторы',
        icon: <Mentors />,
    },
    {
        key: 'knowledge',
        title: 'База знаний',
        icon: <KnowledgeBase />,
    },
    {
        key: 'analytics',
        title: 'Аналитика',
        icon: <Analytics />,
    },
];

const Aside = ({ open }: AsideProps) => {

    const isTablet = useMediaQuery("(max-width:1024px)");

    const [manualCollapsed, setManualCollapsed] = useState(false);

    const collapsed = isTablet || manualCollapsed;

    return (
        <div className={`
        ${styles.container}
        ${open ? styles.open : ""}
        ${collapsed ? styles.collapsed : ""}
    `}>
            <div className={`${styles.header} ${collapsed ? styles.headerCollapsed : ''}`}>
                <div className={styles.logos}>
                    <Yeahub />
                    {!collapsed && <YeahubProfile />}
                </div>
                <Collapse className={`${collapsed && styles.collapsedIcon}`} onClick={() => setManualCollapsed(prev => !prev)} />
            </div>
            <ul className={styles.list}>
                <li className={styles.item}><Home />{!collapsed && <span className={styles.itemTitle}>Главная</span>}</li>
                <li className={`${styles.item} ${styles.itemActive} ${collapsed && styles.itemActiveCollapsed}`}><MyProfile />{!collapsed && <span className={styles.itemTitle}>Мой профиль</span>}</li>

                {!collapsed ? menuItems.map(({ key, title, icon }) => (
                    <li className={styles.item} key={key}>{icon}{!collapsed && <span className={styles.itemTitle}>{title}</span>}<ArrowDownAside /></li>
                )) : <>
                    <CollapsedAside1 />
                    <CollapsedAside2 />
                </>}
            </ul>
            <div className={`${styles.footer} ${collapsed && styles.footerCollapsed}`}>
                <button className={styles.supportButton}><Support /><span>Поддержка</span></button>
                <Logout />
            </div>
        </div>
    )
}

export default Aside