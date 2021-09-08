import Head from 'next/head';
import styles from './MainLayout.module.css';

export default function MainLayout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

MainLayout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest club events and music happenings around you',
  keywords: 'dj, music events',
};
