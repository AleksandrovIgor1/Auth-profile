import Avatar from '@/shared/logos/Avatar.svg?react';
import styles from './styles.module.css';

interface ImagePreviewProps {
    src?: string;
    onDelete?: () => void;
}

export const ImagePreview = ({
    onDelete, src
}: ImagePreviewProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                {src ? (
                    <img
                        loading="lazy"
                        alt="Фото профиля"
                        src={src}
                        className={styles.image}
                    />
                ) : (
                    <Avatar />
                )}
            </div>

            <button
                type="button"
                disabled={!src}
                className={styles.delete}
                onClick={onDelete}
            >
                Удалить фото
            </button>
        </div>
    );
};