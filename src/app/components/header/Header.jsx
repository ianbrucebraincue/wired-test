import styles from './Header.module.css';

import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        
        <button className={styles.menuButton}>
          <span />
          <span />
          <span />
        </button>

        <Link href="/" className={styles.logo}>
          <img src="/wired-logo.svg" alt="WIRED home" />
        </Link>

        <nav className={styles.mainNav}>
          <a href="#">Security</a>
          <a href="#">Politics</a>
          <a href="#">The Big Story</a>
          <a href="#">Business</a>
          <a href="#">Science</a>
          <a href="#">Culture</a>
          <a href="#">Ideas</a>
          <a href="#">Merch</a>
          <a href="#">Reviews</a>
        </nav>

        <div className={styles.headerRight}>
          <a href="#" className={styles.signin}>Sign In</a>
          <span className={styles.divider} />
          <a href="#" className={styles.gift}>Give a Gift</a>
          <button className={styles.searchButton} aria-label="Search">
            <Image src="/search-icon.svg" alt="Search" width={16} height={16} />
          </button>
        </div>

      </div>
    </header>
  );
}