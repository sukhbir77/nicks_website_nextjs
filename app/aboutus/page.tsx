'use client'
import styles from "./about.module.css";

export default function Page() {

    return (
        <div className={styles.bodyMain}>
            <p className={styles.title}>Our Story</p>
            <p className={styles.bodyText}>
                Welcome to Nick sonic sanctuary – where passion meets melody.
                We are a collective of sound artisans dedicated to crafting immersive musical experiences.
                Our compositions are not just notes; they are stories, emotions, and journeys.
                Join us as we redefine the language of music, inviting you to explore, feel, and lose yourself in the magic we create.
                This is not just music; this is an invitation to a world where every note has a purpose and every beat has a heartbeat.

            </p>
            <p className={styles.bodyText}>
                At the heart of our creative endeavor is the belief that music is a universal language that transcends boundaries.
                Nick envisions a world where everyone can connect through the shared experience of harmonies and rhythms.
                Our compositions are crafted with care, reflecting a blend of diverse influences, emotions, and stories.
                Join us on this auditory adventure, where each track is a brushstroke on the canvas of our collective expression.
                Together, lets celebrate the boundless power of music to inspire, uplift, and unite.
            </p>
        </div>
    );
}
