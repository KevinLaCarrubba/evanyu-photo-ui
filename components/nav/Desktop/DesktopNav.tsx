import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavItems } from '../routes'

import styles from './DesktopNav.module.scss'

import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import Logo from '../../../assets/Evan+Yu+Photography+-+Black+(Free+Crop).png'

const DesktopNav = () => {
    const router = useRouter()
    const { pathname: currentPage } = router

    return (
        <nav className={styles.navContents}>
            <Image src={Logo} alt="Evan Yu Photography" width={175} />
            <ul className={styles.linkGroups}>
                {NavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item.url}>
                                <a
                                    className={
                                        currentPage === item.url
                                            ? styles.activeLink
                                            : ''
                                    }>
                                    {item.label}
                                </a>
                            </Link>
                        </li>
                    )
                })}
                <li>
                    <Link href="https://www.instagram.com/_evanyu/">
                        <a>
                            <BsInstagram className={styles.socialIcons} />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/eyu914/">
                        <a>
                            <BsLinkedin className={styles.socialIcons} />
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default DesktopNav
