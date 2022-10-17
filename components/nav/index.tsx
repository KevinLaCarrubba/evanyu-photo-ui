import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavItems } from './routes'
import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakPointSize'
import MobileNav from './mobileNav'
import styles from './Nav.module.scss'

import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import Logo from '../../assets/Evan+Yu+Photography+-+Black+(Free+Crop).png'

const Nav = () => {
    const router = useRouter()
    const { pathname: currentPage } = router

    const breakpoint = useBreakpointSize()
    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        setShowMobileNav(breakpoint === MOBILE_BREAKPOINT)
    }, [breakpoint])
    return (
        <nav className={styles.navContents}>
            {showMobileNav ? (
                <MobileNav />
            ) : (
                <>
                    {' '}
                    <Image src={Logo} alt="Evan Yu Photography" width={150} />
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
                            <Link href="https://www.instagram.com">
                                <a>
                                    <BsInstagram
                                        className={styles.socialIcons}
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com">
                                <a>
                                    <BsLinkedin
                                        className={styles.socialIcons}
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </>
            )}
        </nav>
    )
}

export default Nav
