import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { motion, Variants } from 'framer-motion'

import styles from './PhotoGrid.module.scss'
import Image from 'next/image'

const PhotoGrid = (urlArray: any) => {
    return (
        <>
            <div className={styles.pageContent}>
                {urlArray?.urlArray.map((item: string, index: number) => (
                    <Image
                        key={index}
                        src={`${item}?w=161&fit=crop&auto=format`}
                        blurDataURL={`${item}?w=161&fit=crop&auto=format`}
                        // srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        width={850}
                        height={1200}
                        layout="responsive"
                        loading="lazy"
                        placeholder="blur"
                        objectFit="cover"
                    />
                ))}
            </div>
        </>
    )
}
export default PhotoGrid
