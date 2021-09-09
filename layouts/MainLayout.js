import Head from 'next/head';
import styles from './MainLayout.module.css';

import { NavBar, Footer } from '../components';

export default function MainLayout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <NavBar />
        <div className={styles.layoutContainer}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

MainLayout.defaultProps = {
  title: 'Bookerly | Find, Book, Manage Your Events',
  description: 'Find, Book, Manage Your Events',
  keywords: 'events, venues, parties',
};
