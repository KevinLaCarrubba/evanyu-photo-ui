import { musicURL } from '../../photo-grid/photoArray'
import PhotoGrid from '../../photo-grid'
import styles from './Work.module.scss'

const MusicPage = () => {
    return (
        <div className={styles.pageContent}>
            <PhotoGrid urlArray={musicURL} />
        </div>
    )
}

export default MusicPage
