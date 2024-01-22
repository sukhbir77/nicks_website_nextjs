'use client'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  return (
    <div className={styles.homeContainer}>
      <Image
        src={"/Home_Background.gif"}
        className={styles.imageBg}
        alt="Main frame"
        width={350}
        height={500}
        quality={100}
      />
      <h1 className={`${styles.bodyText} ${styles.bodyTextLarge}`} >Feel the Beat</h1>
      <h2 className={`${styles.bodyText} ${styles.bodyTextSmall}`} >Unlock Nick&apos;s Melodic World</h2>
    </div>
  )
}
