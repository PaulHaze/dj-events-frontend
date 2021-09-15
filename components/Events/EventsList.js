import { render } from 'react-dom';
import { EventsCard } from './EventsCard';

export function EventsList({ events }) {
  if (events.length === 0) {
    return <h1>No Events To Show</h1>;
  }

  const renderEvents = events.map(event => (
    <EventsCard key={event.id} event={event} />
  ));
  return (
    <div>
      <h1>Events List</h1>
      {events && <div className="my-4">{renderEvents}</div>}
    </div>
  );
}
