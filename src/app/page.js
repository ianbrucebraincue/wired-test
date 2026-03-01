import styles from "./page.module.css";

import Header from './components/Header/Header.jsx';
import ParallaxHeroImage from './components/ParallaxHeroImage/ParallaxHeroImage.jsx';

import Article from './components/article/Article/Article.jsx';

import IntroSection from './components/article/IntroSection/IntroSection.jsx';
import Section from './components/article/Section/Section.jsx';
import MediaSection from './components/article/MediaSection/MediaSection.jsx';

import SectionHeader from './components/article/SectionHeader/SectionHeader.jsx';
import SplitLayout from './components/article/SplitLayout/SplitLayout.jsx';
import Button from './components/Button/Button.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import BigStat from './components/BigStat/BigStat.jsx';
import Image from "next/image";

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
              image="/images/1-Humanoids/humanoid-robot.png"
              alt="A humanoid robot walking in an office environment"
            >
              <p>
                A staggering 200-plus Chinese companies are trying to build humanoid robots. In the US, it&rsquo;s closer to 16.
              </p>
              <Button href="https://www.wired.com/story/china-humanoid-robot-coworkers/" text="Read more" />
              <Accordion items={accordionItems} />
            </SplitLayout>
          </Section>
          <MediaSection image="/images/2-CrystalCity.jpg">
            <SectionHeader 
              number={2} 
              title="Your precious woo-woo crystals are the product of a small-town Chinese venture." 
              href="https://www.wired.com/story/china-crystal-capital/"
            />
            <p>
              <strong>&quot;Nature has been</strong> very kind to Donghai,&quot; explains a plaque 
              at the Donghai Crystal Museum. Blessed with rich deposits of 
              clear quartz, this county in eastern China once supplied raw 
              material for Mao Zedong&apos;s transparent coffin. Today, thanks to 
              decades of cutthroat capitalist hustle—including an army of 24/7 
              livestreamers raised by a local Party secretary—Donghai 
              orchestrates the multibillion-dollar global crystal trade. 
              Here&apos;s where that tower of Brazilian amethyst in a London 
              yoga studio, that Colombian quartz on the reception desk of a 
              Miami Botox clinic, that Zambian citrine in an overpriced tourist 
              shop in Tulum really came from.
            </p>
            <Button href="https://www.wired.com/story/china-crystal-capital/" text="Read more" />
          </MediaSection>
          <Section line={false}>
            <SectionHeader 
              number={3} 
              title="You'll gladly drink Franken-milk" />
              <BigStat 
              toNumber={8} 
              description="Tons Amount of milk a cloned Chinese &quot;super cow&quot; can produce annually, almost double the output of a typical American bovine." />
          </Section>
          <Section>
            <SectionHeader
              number={4}
              title="That new battery factory down the street? It’s Chinese."
              href="https://www.wired.com/story/chinese-ev-batteries/" />
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/map.png"
                  alt="Map showing the global manufacturing footprint of China's battery industry"
                  width={1200}
                  height={800}
                />
              </div>
              <p>
                <strong>“Made in China”</strong> used to be—and still often is—a label for cheap labor, knockoffs, and 
                $5 gadgets. Now it also means state-of-the-art technology assembled anywhere in 
                the world. To illustrate the trend, WIRED mapped the global manufacturing footprint of 
                China&apos;s massive battery industry. In 2024, more than 80 percent of the world&apos;s battery 
                cells were produced in China. Today those companies are rapidly expanding and building 
                factories on nearly every continent.
                <a href="https://www.wired.com/story/chinese-ev-batteries/" className={styles.readMoreLink}>Read more</a>
              </p>
          </Section>
          <Section>
            <SectionHeader 
              number={5} 
              title="Your American-made EV is lame" />
              <BigStat 
              startNumber={15999900}
              toNumber={16000000} 
              duration={2}
              description="Estimated number of EVs sold in China in 2025—about 10 times more than were sold in the US." />
          </Section>
          <Section>
            <SectionHeader 
              number={6}
              title="Your one-party nation will conquer the moon."
              href="https://www.wired.com/story/china-us-moon-race-trump-losing/"
            />
            <SplitLayout
              image="/images/6-MoonRace.jpg" 
              alt="A humanoid robot walking in an office environment" 
              border={false}>
              <p>
                <strong>For the last six</strong> years at least, the United States and China have 
                been locked in a space race to put people on the moon. The US mission, 
                however, has been a boondoggle from the start. NASA&apos;s leaders settled 
                on a plan of baffling complexity: a single trip to the lunar surface 
                could require 40-plus rocket launches, while China&apos;s mission will have 
                two. Then President Trump pushed thousands of NASA employees to quit; 
                the White House proposed a massive budget cut; and Trump installed a 
                former reality TV star as NASA&apos;s part-time acting chief. If you want a 
                microcosm of the political psychosis gripping Washington, you could do 
                worse. As one former top-ranking NASA official put it, “We did the worst 
                of all worlds. We positioned it as a race without planning to win.”
                <a href="https://www.wired.com/story/china-us-moon-race-trump-losing/" className={styles.readMoreLink}>Read more</a>
              </p>
            </SplitLayout>
          </Section>
        </Article>
      </main>
    </div>
  );
}
