import { useEffect, useState } from 'react'
import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakPointSize'

import DesktopNav from './Desktop/DesktopNav'
import MobileNav from './Mobile/mobileNav'

const Nav = () => {
    const breakpoint = useBreakpointSize()
    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        setShowMobileNav(breakpoint === MOBILE_BREAKPOINT)
    }, [breakpoint])
    return <>{showMobileNav ? <MobileNav /> : <DesktopNav />}</>
}

export default Nav
