import styles from "./navBar.module.css";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <div>
                <p className={styles.navigationText}>NICK</p>
            </div>
            <div className={styles.navigation_container}>
                <Link href="/" className={styles.navigationText}><p >Home</p></Link>
                <Link href="/library" className={styles.navigationText}><p>Library</p></Link>
                <Link href="/aboutus" className={styles.navigationText}><p>About Us</p></Link>
            </div>
        </div>
    );
}