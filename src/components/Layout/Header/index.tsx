import Link from 'next/link';
import styles from './index.module.css';

export const Header = () => {
  return (
    <header id="masthead" className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">TECH QUEST</Link>
      </h1>
    </header>
  );
};
