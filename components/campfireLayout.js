import Link from 'next/link'
import styles from './campfire.module.css'

export default function CampfireLayout({ children }) {
    return (
        // Campfire background
        <div id={styles['art']}>
            <Link href='/interests/seasons'>
                <a class='home' id={styles['corner-button']}>Go Back Home</a>
            </Link>
            <div id={styles['sky']}>
                <div id={styles['star']}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
                <div id={styles['comet']}></div>
                <div id={styles['mtn']}></div>
                <div id={styles['tree']}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            <div id={styles['moon']}></div>
            <div id={styles['wood']}>
                <span></span>
            </div>
            <div id={styles['fire']}></div>
        </div>
    )
  }