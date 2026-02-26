import styles from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroImage}>
        <img src="/images/Opener-desktop.jpg" alt="Make America China Again hat" />
      </div>
    </section>
  );
}