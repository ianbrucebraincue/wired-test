import styles from "./FontsShowcase.module.css";

export default function FontShowcase() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.pageTitle}>Fonts Showcase</h1>

      {/* APERCU */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Apercu (UI Font)</h2>
        <div className={`${styles.samples} ${styles.apercu}`}>
          <p className={styles.light}>Light 300 — The quick brown fox jumps over the lazy dog</p>
          <p className={`${styles.light} ${styles.italic}`}>Light Italic 300 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.regular}>Regular 400 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.medium}>Medium 500 — The quick brown fox jumps over the lazy dog</p>
          <p className={`${styles.medium} ${styles.italic}`}>Medium Italic 500 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.bold}>Bold 700 — The quick brown fox jumps over the lazy dog</p>
          <p className={`${styles.bold} ${styles.italic}`}>Bold Italic 700 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.extraBold}>ExtraBold 800 — The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>

      {/* BREVE TEXT */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>BreveText (Editorial Body)</h2>
        <div className={`${styles.samples} ${styles.breve}`}>
          <p className={styles.light}>Light 300 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.regular}>Book 400 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.medium}>Medium 500 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.semiBold}>SemiBold 600 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.bold}>Bold 700 — The quick brown fox jumps over the lazy dog</p>
          <p className={styles.black}>Black 900 — The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>

      {/* WIRED DISPLAY */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>WiredDisplay (Headline Font)</h2>
        <div className={`${styles.samples} ${styles.wiredDisplay}`}>
          <p className={styles.displayLarge}>
            WIRED DISPLAY HEADLINE EXAMPLE
          </p>
          <p className={`${styles.displayLarge} ${styles.italic}`}>
            WIRED DISPLAY ITALIC EXAMPLE
          </p>
        </div>
      </div>

      {/* WIRED MONO */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>WiredMono (Metadata / Utility)</h2>
        <div className={`${styles.samples} ${styles.wiredMono}`}>
          <p className={styles.thin}>Thin 100 — 02.26.2026 / ISSUE 04</p>
          <p className={styles.light}>Light 300 — CATEGORY / SECURITY</p>
          <p className={styles.regular}>Regular 400 — BY IAN BRUCE</p>
          <p className={styles.bold}>Bold 700 — SUBSCRIBE NOW</p>
        </div>
      </div>
    </section>
  );
}