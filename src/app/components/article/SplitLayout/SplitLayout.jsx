import styles from "./SplitLayout.module.css";
import Image from "next/image";

export default function ArticleSplit({
  children,
  image,
  alt = "",
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
      <div className={styles.media}>
        <Image src={image} alt={alt} width={600} height={400} />
      </div>
    </div>
  );
}