import styles from "./Button.module.css";

export default function Button({ href, text }) {
  return (
    <div className={styles.button3d}>
      <a href={href}>{text}</a>
    </div>
  );
}