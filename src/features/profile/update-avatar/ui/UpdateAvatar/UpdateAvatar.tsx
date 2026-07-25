import ImageUploader from '@/shared/ui/ImageUploader/ImageUploader';
import styles from './styles.module.css';
import { useAvatarUpload } from '../../model/useAvatarUpload';

const UpdateAvatar = () => {
    const { image, handleAvatarChange } = useAvatarUpload();

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Фото профиля</h2>
                <p className={styles.text}>Поделитесь своими профилями <br /> в других соц. сетях</p>
            </div>
            <ImageUploader
                value={image}
                onChange={handleAvatarChange}
            />
        </div>
    )
}

export default UpdateAvatar