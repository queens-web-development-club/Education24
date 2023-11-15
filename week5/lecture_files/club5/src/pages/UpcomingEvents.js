import UpcomingEventCard from "../components/UpcomingEventCard";
import React, { useState, useEffect } from "react";

function UpcomingEvents(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/events`);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  if (data != null && data.length > 0) {
    return (
      <>
        <div className="mt-16	text-yellow-700">
          <h1 className="mb-20 text-center text-7xl font-bold	">
            Upcoming Events
          </h1>
          <div className="flex flex-col items-center bg-lime-500 py-8">
            {data.map((event) => {
              return <UpcomingEventCard info={event} />;
            })}
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
        <div className="upcoming-events">
          <h1>Upcoming Events</h1>
          <h2
            style={{ alignItems: "center", display: "flex", fontSize: "48px" }}
          >
            <center>Upcoming events will be displayed here!</center>
          </h2>
        </div>
      </>
    );
  }
}

export default UpcomingEvents;
