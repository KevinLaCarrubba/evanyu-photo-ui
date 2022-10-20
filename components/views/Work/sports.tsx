import { sportsURL } from '../../photo-grid/photoArray'
import PhotoGrid from '../../photo-grid'
import styles from './Work.module.scss'

const SportsPage = () => {
    return (
        <div className={styles.pageContent}>
            <PhotoGrid urlArray={sportsURL} />
        </div>
    )
}

export default SportsPage
