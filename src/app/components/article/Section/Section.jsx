import styles from "./Section.module.css";

export default function Section({ line = true, children }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`inner ${line ? styles.line : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}