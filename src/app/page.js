import styles from "./page.module.css";
import Header from './components/Header/Header.jsx';
import HeroImage from './components/HeroImage/HeroImage.jsx';
import FontShowcase from "./components/FontsShowcase/FontsShowcase.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <HeroImage />

        <section className={styles.articleContent}>
          <div className={styles.contentInner}>
            <h1>Made in China</h1>
            <p>Intro paragraph goes here...</p>
            <p>More content...</p>
            <div style={{ height: "150vh" }} />
          </div>
        </section>
        <FontShowcase />
      </main>
    </div>
  );
}
