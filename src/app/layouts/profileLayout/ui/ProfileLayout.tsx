import { Aside } from "@/widgets/profile/aside"
import Header from "@/widgets/profile/header/ui/Header/Header"
import { Outlet } from "react-router-dom"
import styles from './styles.module.css';
import { Footer } from "@/widgets/profile/footer/Footer";
import { useState } from "react";

const ProfileLayout = () => {
    const [asideOpen, setAsideOpen] = useState(false);

    const handleMenuClick = () => {
        setAsideOpen(prev => !prev);
    };

    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <Aside open={asideOpen} />
                <div className={styles.main}>
                    <Header onMenuClick={handleMenuClick} />
                    <div className={styles.pageContent}>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileLayout