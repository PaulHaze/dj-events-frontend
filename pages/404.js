import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '@/layouts/MainLayout';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Bookerly | OOOPS wrong turn</title>
      </Head>
      <MainLayout>
        <div className="flex flex-col justify-center items-center min-h-screen pb-52">
          <div className="">
            <p>You seem a little lost!</p>
          </div>
          <div className="mt-10">
            <button type="button" className="btn" onClick={() => router.back()}>
              Click here to go back
            </button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
