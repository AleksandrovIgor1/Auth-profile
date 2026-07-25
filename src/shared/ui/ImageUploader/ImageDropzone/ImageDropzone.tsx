import Image from '@/shared/icons/Image.svg?react'
import styles from './styles.module.css';
import { useId } from 'react';

interface ImageDropzoneProps {
    id?: string;
    accept?: string;
    onSelect?: (file: File) => void;
    children?: React.ReactNode;
}

export const ImageDropzone = ({
    id,
    accept = "image/png,image/jpeg",
    onSelect,
    children,
}: ImageDropzoneProps) => {
    const MAX_SIZE = 5 * 1024 * 1024;
    const allowed = ["image/png", "image/jpeg"];

    const generatedId = useId();
    const selectId = id ?? generatedId;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if (file.size > MAX_SIZE) {
            alert("Размер файла не должен превышать 5 МБ");
            return;
        }

        if (!allowed.includes(file.type)) {
            return;
        }

        onSelect?.(file);

        e.target.value = "";
    };

    return (
        <div className={styles.dropzone}>
            <input
                id={selectId}
                type="file"
                accept={accept}
                className={styles.input}
                onChange={handleChange}
            />

            <label
                htmlFor={selectId}
                className={styles.content}
            >
                <Image />

                {children ?? (
                    <>
                        <p className={styles.text}>
                            <span className={styles.link}>Кликни для изменения</span>
                            <span className={styles.mobileBreak}>
                                {' '}или перетащи сюда фотографию
                            </span>
                        </p>

                        <small className={styles.size}>
                            JPG, PNG, JPEG (не более 5 Мб)
                        </small>
                    </>
                )}
            </label>
        </div>
    );
};