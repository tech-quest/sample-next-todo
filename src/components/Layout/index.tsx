import React from 'react';
import { Header } from './Header';
import styles from './index.module.css';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contents}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
