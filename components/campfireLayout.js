import styles from './campfire.module.css'

export default function CampfireLayout({ children }) {
    return (
        // Campfire background
        <div id={styles['art']}>
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