import styles from "./MediaSection.module.css";
import Image from "next/image";

export default function MediaSection({ image, alt = "", children }) {
  return (
    <section className={styles.mediaSection}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={alt}
          fill
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.overlay} />
      <div className={`container ${styles.containerMedia}`}>
        <div className={`inner ${styles.innerMedia}`}>
          {children}
        </div>
      </div>
    </section>
  );
}