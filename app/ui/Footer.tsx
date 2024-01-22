import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.footerText}>@ 2024 Nick</p>
            <p className={styles.footerText}>Terms and Conditions</p>
            <p className={styles.footerText}>Privacy Policy</p>
        </div>
    );
}