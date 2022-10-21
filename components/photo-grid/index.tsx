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
