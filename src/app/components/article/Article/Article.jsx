import styles from "./Article.module.css";

export default function Article({children}) {
  return (
    <div className={styles.article}>
      {children}
    </div>
  );
}