import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './PhotoGrid.module.scss'
import Image from 'next/image'
import Loader from '../../utilities/loader'
const PhotoGrid = (urlArray: any) => {
    const [showLoader, setShowLoader] = useState(true)
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
    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 4000)
    }, [])

    return (
        <>
            {/* {showLoader && <Loader />} */}

            <div className={styles.pageContent}>
                <ImageList variant="masonry" cols={3} gap={10}>
                    {urlArray?.urlArray.map((item: string, index: number) => (
                        // <motion.div
                        //     key={index}
                        //     className="card-container"
                        //     initial="offscreen"
                        //     whileInView="onscreen"
                        //     viewport={{ once: true, amount: 0.8 }}>
                        //     <motion.div className="box" variants={cardVariants}>
                        <ImageListItem key={index}>
                            <Image
                                src={`${item}?w=161&fit=crop&auto=format`}
                                // srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                width="100%"
                                height="100%"
                                layout="responsive"
                                loading="lazy"
                                objectFit="contain"
                            />
                        </ImageListItem>
                        //     </motion.div>
                        // </motion.div>
                    ))}
                </ImageList>
            </div>
        </>
    )
}
export default PhotoGrid
