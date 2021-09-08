import Head from 'next/head';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="container p-5 max-w-xl">
        <h1 className="font-heading">About</h1>
        <p>Find The Latest Dj Events Near You</p>
        <div className="mt-10">
          <p className="text-sm font-heading text-gray-400">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
