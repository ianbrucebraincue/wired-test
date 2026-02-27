import styles from "./SplitLayout.module.css";

export default function ArticleSplit({
  children,
  image,
  variant = 'default',
}) {
  return (
    <div
      className={`
        ${styles.split}
        ${styles[variant]}
      `}
    >
      <div className={styles.text}>{children}</div>
      <div className={styles.media}>{image}</div>
    </div>
  );
}