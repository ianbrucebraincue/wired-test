import styles from "./BigStat.module.css";
import CountUp from '../CountUp/CountUp';

export default function BigStat({ number, description, duration = 1 }) {
  return (
    <div className={styles.bigStat}>
      <span className={styles.number}>
        <CountUp
          from={0}
          to={number}
          separator=","
          direction="up"
          duration={duration}
          className="count-up-text"
        />
      </span>
      <p className={styles.description}>{description}</p>
    </div>
  );
}