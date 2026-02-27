import styles from "./SplitLayout.module.css";

export default function ArticleSplit({
  children,
  image,
  variant = 'default',
  reverse = false
}) {
  return (
    <div
      className={`
        ${styles.split}
        ${styles[variant]}
        ${reverse ? styles.reverse : ''}
      `}
    >
      <div className={styles.text}>{children}</div>
      <div className={styles.media}>{image}</div>
    </div>
  );
}