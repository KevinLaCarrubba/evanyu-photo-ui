import Image from 'next/image'
import Headshot from '../../../assets/evan-headshot.jpeg'
import styles from './About.module.scss'
import {
    NBAIcon,
    MLBIcon,
    XFLIcon,
    JWSIcon,
    MSGEIcon,
    NYKIcon,
    NYRIcon
} from '../../../assets/SVGs/SVG'
const AboutPage = () => {
    return (
        <div className={styles.aboutPageContents}>
            <div className={styles.imageContainer}>
                <Image src={Headshot} width={500} height={500} />
            </div>
            <div className={styles.infoContainer}>
                <h4>About Me</h4>
                <p>
                    Evan Yu is a New York/New Jersey based photographer with a
                    wealth of experience and knowledge across a variety of
                    photography genres. He has worked as both a photographer and
                    photo editor for large sports and entertainment
                    organizations. Evan is a Seton Hall graduate with a passion
                    for sports, music, pop culture, and travel. He is a long
                    suffering fan of the Mets, Knicks, Eagles, and Liverpool FC.
                </p>
                <h4>Work</h4>
                <span>Sports Organizations</span>
                <ul>
                    <li>-NBA</li>
                    <li>-MLB</li>
                    <li>-XFL</li>
                </ul>
                <span>Entertainment Organizations</span>
                <ul>
                    <li>-Just Women's Sports</li>
                    <li>-Madison Square Garden Entertainment</li>
                </ul>
                <span>Sports Teams</span>
                <ul>
                    <li>-New York Knicks</li>
                    <li>-New York Knicks</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutPage
