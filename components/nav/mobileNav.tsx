import { useState } from 'react'
import styles from './MobileNav.module.scss'
const MobileNav = () => {
    const [show, setShow] = useState(false)
    const menuToggle = () => {
        setShow(!show)
        return console.log('yerrrr')
    }

    return (
        <div
            className={
                show === true
                    ? `${styles.header} ${styles.menuOpened}`
                    : `${styles.header}`
            }>
            <div className={styles.burgerContainer} onClick={menuToggle}>
                <div
                    className={styles.burger}
                    onClick={() => {
                        console.log('burger')
                    }}>
                    <div className={`${styles.bar} ${styles.topBar}`}></div>
                    <div className={`${styles.bar} ${styles.btmBar}`}></div>
                </div>
            </div>
            <div className={`${styles.icon} ${styles.iconApple}`}></div>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Sports</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">Music</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">Travel</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">Events</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">About</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">Contact</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">Social Links</a>
                </li>
            </ul>
            <div
                className={`${styles.shop} ${styles.icon} ${styles.iconBag}`}></div>
        </div>
    )
}
export default MobileNav
