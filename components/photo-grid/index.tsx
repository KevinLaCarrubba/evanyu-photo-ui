import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { motion, Variants } from 'framer-motion'

import styles from './PhotoGrid.module.scss'
import Image from 'next/image'

const PhotoGrid = (urlArray: any) => {
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

    return (
        <>
            <div className={styles.pageContent}>
                <ImageList variant="masonry" cols={3} gap={10}>
                    {urlArray?.urlArray.map((item: string, index: number) => (
                        <ImageListItem key={index}>
                            <Image
                                src={`${item}?w=161&fit=crop&auto=format`}
                                blurDataURL={`${item}?w=161&fit=crop&auto=format`}
                                // srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                width="100%"
                                height="100%"
                                layout="responsive"
                                loading="lazy"
                                placeholder="blur"
                                objectFit="cover"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    )
}
export default PhotoGrid
