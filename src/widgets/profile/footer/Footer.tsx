import FigmaFooter from '@/shared/icons/FigmaFooter.svg?react';
import TelegramFooter from '@/shared/icons/TelegramFooter.svg?react';
import YoutubeFooter from '@/shared/icons/YoutubeFooter.svg?react';
import TikTokFooter from '@/shared/icons/TikTokFooter.svg?react';
import GithubFooter from '@/shared/icons/GithubFooter.svg?react';
import Yeahub from '@/shared/logos/Yeahub.svg?react';

import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Yeahub />
          <div className={styles.logoText}>
            <p className={styles.title}>
              Выбери, каким будет IT завтра, вместе с нами
            </p>
            <p className={styles.description}>
              YeaHub — это полностью открытый проект, призванный объединить и
              улучшить IT-сферу. Нашисходный код доступен для просмотра на
              GitHub. Дизайн проекта также открыт для ознакомления в Figma.
            </p>
          </div>
        </div>
        <hr className={styles.footerHr} />
        <div className={styles.bottom}>
          <ul className={styles.left}>
            <li className={styles.copyright}>© 2024 YeaHub</li>
            <li>Документы</li>
          </ul>
          <div className={styles.right}>
            <span className={styles.text}>
              Ищите нас и в других соцсетях @yeahub_it
            </span>

            <div className={styles.icons}>
              <FigmaFooter />
              <TelegramFooter />
              <YoutubeFooter />
              <TikTokFooter />
              <GithubFooter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
