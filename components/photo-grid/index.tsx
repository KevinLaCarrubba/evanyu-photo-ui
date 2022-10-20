import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { motion, Variants } from 'framer-motion'
import styles from './PhotoGrid.module.scss'
const PhotoGrid = urlArray => {
    const cardVariants: Variants = {
        offscreen: {
            filter: 'blur(2px)',
            scale: 0.9
        },
        onscreen: {
            filter: 'blur(0)',
            scale: 1,
            transition: {
                duration: 0.3
            }
        }
    }
    console.log(urlArray.urlArray)
    return (
        <div className={styles.pageContent}>
            <ImageList variant="masonry" cols={3} gap={10}>
                {urlArray.urlArray.map((item: string, index: number) => (
                    <motion.div
                        key={index}
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}>
                        <motion.div className="box" variants={cardVariants}>
                            <ImageListItem key={index}>
                                <img
                                    src={`${item}?w=161&fit=crop&auto=format`}
                                    srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </motion.div>
                    </motion.div>
                ))}
            </ImageList>
        </div>
    )
}
export default PhotoGrid
