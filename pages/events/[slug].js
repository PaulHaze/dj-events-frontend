/* eslint-disable max-len */
import Link from 'next/link';
import Image from 'next/image';

import MainLayout from '@/layouts/MainLayout';
import { LinkButton } from '@/components/index';

import { API_URL } from '@/config/index';
import { BiPencil } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

export default function EventPage({ event }) {
  const handleEditEvent = () => {
    console.log('Edit Pressed');
  };

  const handleDeleteEvent = () => {
    console.log('Edit Pressed');
  };

  return (
    <MainLayout>
      <div className="container p-5 max-w-xl">
        <div className="container mt-5">
          {/* EDIT DELETE BUTTONS */}
          <div className="flex justify-between sm:justify-end sm:space-x-3">
            <button
              type="button"
              onPress={handleEditEvent}
              className="flex text-sky-600 text-sm font-semibold mr-5 mb-2"
            >
              <span className="fill-current text-sky-600 mr-1">
                <BiPencil size={16} />
              </span>{' '}
              Edit Event
            </button>
            <button
              type="button"
              onPress={handleDeleteEvent}
              className="flex text-red-600 text-sm font-semibold"
            >
              <span className="fill-current mr-1">
                <BsTrash size={16} />
              </span>{' '}
              Delete Event
            </button>
          </div>
        </div>

        {/* TIME */}
        <div className="">
          <h4 className="font-light font-heading text-coolgray-400">
            {event.date} @ {event.time}
          </h4>
        </div>

        {/* NAME */}
        <div className="">
          <h1 className="font-heading text-4xl md:text-6xl mt-2 w-4/5 md:w-3/4">
            {event.name}
          </h1>
        </div>

        {/* IMAGE */}

        <Image src={event.image} width="960" height="600" />
        {/* <div
          className="w-full flex h-[300px] sm:h-[380px] md:h-[480px] overflow-hidden"
          style={{
            backgroundImage: `url(${event.image})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: 'no-repeat',
          }}
        /> */}

        {/* DJS */}
        <div className="mt-5 flex items-top">
          <div className="min-w-[80px]">
            <h2 className="font-heading">DJ'S': </h2>
          </div>
          <h5 className="text-coolgray-500 font-semibold ml-2 pt-1">
            {event.performers}
          </h5>
        </div>

        {/* DETAILS */}
        <div className="mt-1 flex items-top">
          <div className="min-w-[80px]">
            <h2 className="font-heading">DETAILS: </h2>
          </div>
          <p className="text-coolgray-500 bold ml-2 mt-1">
            {event.description}
          </p>
        </div>

        {/* VENUE */}
        <div className="mt-5 flex items-top">
          <div className="min-w-[80px]">
            <h2 className="font-heading">VENUE: </h2>
          </div>
          <div className="">
            <p className="text-coolgray-800 font-bold ml-2 mt-1">
              {event.venue}
            </p>
            <p className="text-coolgray-500 text-xs bold ml-2 mt-1">
              {event.address}
            </p>
          </div>
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

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const slugs = events.map(evt => evt.slug);
  const paths = slugs.map(slug => ({
    params: {
      slug,
    },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${API_URL}/events/${params.slug}`);
  const evt = await res.json();
  return {
    props: {
      event: evt[0],
    },
  };
}

/* export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events/${slug}`);
  const eventst = await res.json();
  const evt = events.find(e => e.slug === slug);
  return {
    props: {
      slug,
      event: evt:[0],
    },
  };
}
 */
