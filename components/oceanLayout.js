import Link from 'next/link'
import styles from './ocean.module.css'

export default function OceanLayout({ children }) {
    return (
        // Ocean background
        <div class={styles.landscape}>
        <Link href='/interests/seasons'>
            <a class='home'>Go Back Home</a>
        </Link>

        <div class={styles['mountain']}></div>
        <div class={`${styles['mountain']} ${styles['mountain-2']}`}></div>
        <div class={`${styles['mountain']} ${styles['mountain-3']}`}></div>
        <div class={`${styles['sun-container']} ${styles['sun-container-1']}`}>
        </div>
        <div class={styles['sun-container']}>
            <div class={styles['sun']}></div>
        </div>
        <div class={styles['cloud']}></div>
        <div class={`${styles['cloud']} ${styles['cloud-1']}`}></div>
        <div class={`${styles['sun-container']} ${styles['sun-container-reflection']}`}>
            <div class={styles['sun']}></div>
        </div>
        <div class={styles['light']}></div>
        <div class={`${styles['light']} ${styles['light-1']}`}></div>
        <div class={`${styles['light']} ${styles['light-2']}`}></div>
        <div class={`${styles['light']} ${styles['light-3']}`}></div>
        <div class={`${styles['light']} ${styles['light-4']}`}></div>
        <div class={`${styles['light']} ${styles['light-5']}`}></div>
        <div class={`${styles['light']} ${styles['light-6']}`}></div>
        <div class={`${styles['light']} ${styles['light-7']}`}></div>
        <div class={styles['water']}></div>
        <div class={styles['splash']}></div>
        <div class={`${styles['splash']} ${styles['delay-1']}`}></div>
        <div class={`${styles['splash']} ${styles['delay-2']}`}></div>
        <div class={`${styles['splash']} ${styles['splash-4']} ${styles['delay-2']}`}></div>
        <div class={`${styles['splash']} ${styles['splash-4']} ${styles['delay-3']}`}></div>
        <div class={`${styles['splash']} ${styles['splash-4']} ${styles['delay-4']}`}></div>
        <div class={`${styles['splash']} ${styles['splash-stone']} ${styles['delay-3']}`}></div>
        <div class={`${styles['splash']} ${styles['splash-stone']} ${styles['delay-4']}`}></div>
        <div class={`${styles['splash']} ${styles['splash-stone']} ${styles['delay-5']}`}></div>
        <div class={`${styles['lotus']} ${styles['lotus-1']}`}></div>
        <div class={`${styles['lotus']} ${styles['lotus-2']}`}></div>
        <div class={`${styles['lotus']} ${styles['lotus-3']}`}></div>
        <div class={styles['front']}>
            <div class={styles['stone']}></div>
            <div class={styles['grass']}></div>
            <div class={`${styles['grass']} ${styles['grass-1']}`}></div>
            <div class={`${styles['grass']} ${styles['grass-2']}`}></div>
            <div class={styles['reed']}></div>
            <div class={`${styles['reed']} ${styles['reed-1']}`}></div>
        </div>
      </div>
    )
  }