import { travelURL } from '../../photo-grid/photoArray'
import PhotoGrid from '../../photo-grid'
import styles from './Work.module.scss'

const TravelPage = () => {
    return (
        <div className={styles.pageContent}>
            <PhotoGrid urlArray={travelURL} />
        </div>
    )
}

export default TravelPage
