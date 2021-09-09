import Head from 'next/head';
import styles from './MainLayout.module.css';

import { NavBar } from '../components';

export default function MainLayout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.layoutContainer}>{children}</div>
    </div>
  );
}

MainLayout.defaultProps = {
  title: 'Bookerly | Find, Book, Manage Your Events',
  description: 'Find, Book, Manage Your Events',
  keywords: 'events, venues, parties',
};
