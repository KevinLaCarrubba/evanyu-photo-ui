import { useEffect, useState } from 'react'
import styles from './MobileNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../assets/Evan+Yu+Photography+-+Black+(Free+Crop).png'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MobileNavItems } from '../routes'
const MobileNav = () => {
    const [show, setShow] = useState(false)
    const [stopScroll, setStopScroll] = useState(false)
    const menuToggle = () => {
        setShow(!show)
        setStopScroll(!stopScroll)
    }

    useEffect(() => {
        if (stopScroll === true) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [stopScroll])

    return (
        <nav>
            <div
                className={
                    show === true
                        ? `${styles.header} ${styles.menuOpened}`
                        : `${styles.header}`
                }>
                <div className={styles.burgerContainer} onClick={menuToggle}>
                    <div className={styles.burger}>
                        <div className={`${styles.bar} ${styles.topBar}`}></div>
                        <div className={`${styles.bar} ${styles.btmBar}`}></div>
                    </div>
                </div>
                <div className={`${styles.icon} ${styles.iconApple}`}>
                    <Image
                        src={Logo}
                        alt="Evan Yu Photography"
                        width={110}
                        height={35}
                    />
                </div>
                <ul
                    className={styles.menu}
                    style={{ display: `${show === true ? 'block' : 'none'}` }}>
                    {MobileNavItems.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={styles.menuItem}
                                onClick={menuToggle}>
                                <Link href={item.url}>
                                    <a>{item.label}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.socialLinks}>
                    <BsInstagram /> <BsLinkedin />{' '}
                </div>
            </div>
        </nav>
    )
}
export default MobileNav
