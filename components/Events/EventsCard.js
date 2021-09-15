/* eslint-disable jsx-a11y/anchor-is-valid */
/* 
id	"1"
name	"Throwback Thursdays with DJ Manny Duke"
slug	"throwback-thursdays-with-dj-manny-duke"
venue	"Horizon Club"
address	"919 3rd Ave New York, New York(NY), 10022"
performers	"DJ Manny Duke"
date	"June 09, 2021"
time	"10:00 PM EST"
description	"Featuring deep cuts, 
party anthems and remixes nostalgic songs from 
two of the best decades of music with the very 
best music from the 90's and 2000's"
image	"/images/sample/event1.jpg"

*/
import Link from 'next/link';
import Image from 'next/image';
import { FcCalendar, FcHome, FcAlarmClock, FcAdvance } from 'react-icons/fc';

export function EventsCard({ event }) {
  return (
    <div className="border shadow-md rounded-lg my-3 flex flex-col sm:flex-row overflow-hidden bg-white h-full transition-all hover:scale-[1.02] hover:shadow-lg hover:z-50 lg:h-[120px]">
      <div
        className="w-full flex h-[120px] overflow-hidden sm:hidden"
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundPosition: `center right`,
          backgroundSize: `cover`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="hidden sm:flex sm:flex-shrink-0 sm:mr-8 items-center">
        <Image
          src={event.image ? event.image : '/images/event-default.png'}
          width={170}
          height={120}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-2">
        <div className="">
          <h4 className="font-bold font-heading">{event.name}</h4>
        </div>
        <div className="flex flex-col space-y-1 justify-between sm:space-y-0  sm:flex-row">
          <div className="flex text-sm">
            <span className="mt-0.5 mr-1">
              <FcCalendar />
            </span>
            {event.date}
          </div>
          <div className="flex text-sm">
            <span className="mt-0.5 mr-1">
              <FcAlarmClock />
            </span>
            {event.time}
          </div>
          <div className="flex justify-between">
            <div className="flex text-sm">
              <span className="mt-0.5 mr-1">
                <FcHome />
              </span>{' '}
              {event.venue}
            </div>
            <div className="self-end border border-blue-300 p-1 rounded ml-4 -mt-1 bg-blue-100">
              <Link href={`/events/${event.slug}`}>
                <a className="cursor-pointer text-white">
                  <FcAdvance />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
