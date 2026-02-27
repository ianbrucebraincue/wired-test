import styles from "./page.module.css";
import Header from './components/Header/Header.jsx';
import ParallaxHeroImage from './components/ParallaxHeroImage/ParallaxHeroImage.jsx';
import Article from './components/article/Article/Article.jsx';
import IntroSection from './components/article/IntroSection/IntroSection.jsx';
import Section from './components/article/Section/Section.jsx';
import SectionHeader from './components/article/SectionHeader/SectionHeader.jsx';
import FontsShowcase from "./components/FontsShowcase/FontsShowcase.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ParallaxHeroImage />

        <Article>
          <IntroSection />
          <Section>
            <SectionHeader 
              number={1} 
              title="Your next coworker is a two-legged Chinese robot." 
              href="https://www.wired.com/story/china-humanoid-robot-coworkers/"
            />
          </Section>
          <FontsShowcase /> 
        </Article>
      </main>
    </div>
  );
}
