import { ImageDropzone } from './ImageDropzone/ImageDropzone'
import { ImagePreview } from './ImagePreview/ImagePreview'
import styles from './styles.module.css'
interface ImageUploaderProps {
    value?: string;
    onChange?: (file: File | null) => void;
}

const ImageUploader = ({ value, onChange = () => { }, }: ImageUploaderProps) => {

    return (
        <div className={styles.container}>
            <ImagePreview src={value} onDelete={() => onChange(null)} />
            <ImageDropzone onSelect={onChange} />
        </div>
    )
}

export default ImageUploader