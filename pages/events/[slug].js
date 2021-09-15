import Link from 'next/link';

import { useRouter } from 'next/router';
import MainLayout from '@/layouts/MainLayout';
import { LinkButton } from '@/components/index';

import { API_URL } from '@/config/index';

export default function EventPage({ slug, event }) {
  const router = useRouter();

  // const [event] = event;
  console.log(event);
  // const url = router.query.slug;
  // console.log('slug from props: ', slug);
  // console.log(router.query.slug);
  return (
    <MainLayout>
      <div className="container p-5 max-w-xl">
        <h1 className="font-heading">Event Details</h1>
        <div className="">
          <h4 className="font-bold font-heading">{event.name}</h4>
        </div>
        <div className="flex mt-10">
          <LinkButton href="/events" linkText="Back To Events" />
        </div>
        <div className="mt-10">
          <p className="text-sm font-heading text-gray-400">Version 1.0.0</p>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  console.log(typeof events);
  const event = events.find(e => e.slug === slug);
  return {
    props: {
      slug,
      event,
    },
  };
}
