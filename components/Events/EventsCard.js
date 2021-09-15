/* 
id	"1"
name	"Throwback Thursdays with DJ Manny Duke"
slug	"throwback-thursdays-with-dj-manny-duke"
venue	"Horizon Club"
address	"919 3rd Ave New York, New York(NY), 10022"
performers	"DJ Manny Duke"
date	"June 09, 2021"
time	"10:00 PM EST"
description	"Featuring deep cuts, party anthems and remixes nostalgic songs from two of the best decades of music with the very best music from the 90's and 2000's"
image	"/images/sample/event1.jpg"

*/

import Link from 'next/link';
import Image from 'next/image';
import { FcCalendar, FcHome, FcAlarmClock } from 'react-icons/fc';

export function EventsCard({ event }) {
  return (
    <div className="border shadow-md rounded-lg my-3 flex  sm:flex-row overflow-hidden  h-full">
      <div className="flex flex-shrink-0 mr-8 items-center ">
        <Image
          src={event.image ? event.image : '/images/event-default.png'}
          width={170}
          height={100}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-2">
        <div className="">
          <h4 className="font-bold">{event.name}</h4>
        </div>
        {/* <p className="font-light text-gray-600">{event.description}</p> */}
        <div className="flex flex-col space-y-1 justify-between sm:flex-row">
          <div className="flex">
            <span className="mt-1 mr-1">
              <FcCalendar />
            </span>
            {event.date}
          </div>
          <div className="flex">
            <span className="mt-1 mr-1">
              <FcAlarmClock />
            </span>
            {event.time}
          </div>
          <div className="flex">
            {' '}
            <span className="mt-0.5 mr-1">
              <FcHome />
            </span>{' '}
            {event.venue}
          </div>
        </div>
      </div>
    </div>
  );
}
