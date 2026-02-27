import styles from "./SplitLayout.module.css";

export default function ArticleSplit({
  children,
  image,
  border = true
}) {
  return (
    <div
      className={`
        ${styles.split}
        ${border ? '' : styles.borderless}
      `}
    >
      <div className={styles.text}>{children}</div>
      <div className={styles.media}>{image}</div>
    </div>
  );
}