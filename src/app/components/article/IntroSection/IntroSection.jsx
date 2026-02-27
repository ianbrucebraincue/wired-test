import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={styles.introSection}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>23 Ways You&rsquo;re Already Living in the Chinese Century</h1>
          <p className={styles.tagline}>
            The robotics explosion. The energy revolution. The cultural takeover. 
            It&rsquo;s everything you wanted for the United States—but done better, bigger, and badder in China.
          </p>
        </div>
        <div className={styles.inner}>
          <div className={styles.editorsNote}>
            <p>
              A decade ago, China&rsquo;s political leaders laid out an ambitious industrial plan: By 2025, 
              they pledged, their country would be a world capital, with the goal of moving from “Chinese speed 
              to Chinese quality, the transformation of Chinese products to Chinese brands.” This is the difference, 
              they wrote, between “Made in China” and “Created in China.”
            </p>
            <p>
              At WIRED, we never take what the government—ours or anybody else&rsquo;s—says at face value. 
              Still, as journalists, we respect the ability to hit a deadline. While the president of this 
              country is promising to make America great again as he strips it for parts, Chinese business and 
              political leaders have quietly <a href="#">seized the moment</a> . This is not to say that the Chinese economy, let 
              alone its repressive totalitarian government, runs perfectly. But these days, there&rsquo;s almost no 
              limit to what is created in China, then eagerly consumed by the rest of the world. Here are 23tk ways 
              that China is rewiring the future.
            </p>
            <h6 className={styles.editorsNoteSignature}>
              &mdash; The Editors
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}