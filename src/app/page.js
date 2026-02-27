import styles from "./page.module.css";

import Header from './components/Header/Header.jsx';
import ParallaxHeroImage from './components/ParallaxHeroImage/ParallaxHeroImage.jsx';
import Article from './components/article/Article/Article.jsx';
import IntroSection from './components/article/IntroSection/IntroSection.jsx';
import Section from './components/article/Section/Section.jsx';
import SectionHeader from './components/article/SectionHeader/SectionHeader.jsx';
import SplitLayout from './components/article/SplitLayout/SplitLayout.jsx';
import Button from './components/Button/Button.jsx';
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
            <SplitLayout
              image={<img src="/images/1-Humanoids/humanoid-robot.png" alt="A humanoid robot walking in an office environment" />}
            >
              <p>
                A staggering 200-plus Chinese companies are trying to build humanoid robots. In the US, it&rsquo;s closer to 16.
              </p>
              <Button href="https://www.wired.com/story/china-humanoid-robot-coworkers/" text="Read more" />
            </SplitLayout>
            
          </Section>
          <FontsShowcase /> 
        </Article>
      </main>
    </div>
  );
}
