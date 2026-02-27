import styles from "./Section.module.css";

export default function Section({ children }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="inner">
          {children}
        </div>
      </div>
    </section>
  );
}