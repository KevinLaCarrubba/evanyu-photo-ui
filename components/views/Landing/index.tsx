import Image from 'next/image'
import { landingURL } from '../../photo-grid/photoArray'
import Link from 'next/link'
import styles from './Landing.module.scss'

const LandingPage = () => {
    return (
        <div className={styles.pageContent}>
            {landingURL.map((item, index) => {
                return (
                    <Link href={item.route} key={index}>
                        <div className={styles.container}>
                            <Image
                                src={item.url}
                                blurDataURL={item.url}
                                layout="fill"
                                loading="lazy"
                                placeholder="blur"
                            />
                            <div className={styles.overlay}>
                                <span className={styles.label}>
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default LandingPage
