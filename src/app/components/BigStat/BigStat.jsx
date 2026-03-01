import styles from "./BigStat.module.css";
import CountUp from '../CountUp/CountUp';

export default function BigStat({ startNumber = 0, toNumber, description, duration = 1 }) {
  return (
    <div className={styles.bigStat}>
      <span className={styles.number}>
        <CountUp
          from={startNumber}
          to={toNumber}
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