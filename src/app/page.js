import styles from "./page.module.css";

import Header from './components/Header/Header.jsx';
import ParallaxHeroImage from './components/ParallaxHeroImage/ParallaxHeroImage.jsx';
import Article from './components/article/Article/Article.jsx';
import IntroSection from './components/article/IntroSection/IntroSection.jsx';
import Section from './components/article/Section/Section.jsx';
import SectionHeader from './components/article/SectionHeader/SectionHeader.jsx';
import SplitLayout from './components/article/SplitLayout/SplitLayout.jsx';
import Button from './components/Button/Button.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import FontsShowcase from "./components/FontsShowcase/FontsShowcase.jsx";

const accordionItems = [
  {
    title: "Overview",
    content: "The Unitree G1, shown here, can do kicks, flips, and dance moves, but its manual dexterity is limited. A comprehensive software interface and powerful onboard computers make this robot easy for researchers to use."
  },
  {
    title: "Head",
    content: "The robot maps its surroundings using a front-facing depth camera and a 3d lidar scanner that provides a view of both the front and back."
  },
  {
    title: "Grip",
    content: "Want to add three- or five-fingered hands? That’ll cost extra. Some newer hands include pressure sensors that allow the robot to feel objects."
  },
  {
    title: "Articulation",
    content: "The G1 has 43 motors. Major joints have permanent magnet synchronous motors that provide high torque and rapid acceleration, allowing it to perform explosive moves."
  },
  {
    title: "Mobility",
    content: "The G1 has a top speed of 4.7 mph. Its legs are capable of impressive dynamic balancing."
  }
];

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
              <Accordion items={accordionItems} />
            </SplitLayout>
            
          </Section>
          <FontsShowcase /> 
        </Article>
      </main>
    </div>
  );
}
