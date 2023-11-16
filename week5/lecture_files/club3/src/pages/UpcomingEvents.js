import UpcomingEventCard from "../components/UpcomingEventCard";
import React, { useState } from "react";

// How we would pass props not using a database

const events = [];

function UpcomingEvents(props) {
  const [data, setData] = useState(events);

  if (data != null && data.length > 0) {
    return (
      <>
        <div className="mt-16	text-yellow-700">
          <h1 className="mb-20 text-center text-7xl font-bold">
            Upcoming Events
          </h1>
          <div className="flex flex-col items-center bg-lime-500 py-8">
            <UpcomingEventCard info={data[0]} />
            <UpcomingEventCard info={data[1]} />
            <UpcomingEventCard info={data[2]} />
            <UpcomingEventCard info={data[3]} />
          </div>
          <div className="flex items-center justify-center py-8">
            <div className="mx-5 w-4/12 border"></div>
            <p>You've reached the end</p>
            <div className="mx-5 w-4/12 border"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mt-16">
          <h1 className="mb-20 text-center text-7xl font-bold text-yellow-700">
            Upcoming Events
          </h1>
          <h2 className="flex items-center text-5xl font-bold">
            <center>Upcoming events will be displayed here!</center>
          </h2>
        </div>
      </>
    );
  }
}

export default UpcomingEvents;
