import { eventURL } from '../../photo-grid/photoArray'
import PhotoGrid from '../../photo-grid'
import styles from './Work.module.scss'

const EventPage = () => {
    return (
        <div className={styles.pageContent}>
            <PhotoGrid urlArray={eventURL} />
        </div>
    )
}

export default EventPage
