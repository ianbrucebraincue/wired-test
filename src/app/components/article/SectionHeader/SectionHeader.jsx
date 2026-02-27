import styles from "./SectionHeader.module.css";

export default function SectionHeader({ number, title, href }) {
  const TitleContent = href ? (
    <a href={href}>{title}</a>
  ) : (
    title
  );

  return (
    <div className={styles.header}>
      <h3 className={styles.title}>
        <span className={styles.number}>{number}.</span>
        {TitleContent}
      </h3>
    </div>
  );
}