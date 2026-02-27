import styles from "./AccordionItem.module.css";

export default function AccordionItem({ title, children, isOpen, onToggle }) {
  return (
    <li className={styles.item}>
      <h3 className={styles.heading}>
        <button
          className={styles.trigger}
          onClick={onToggle}
        >
          {title}
          <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
        </button>
      </h3>

      <div
        className={`${styles.content} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </li>
  );
}