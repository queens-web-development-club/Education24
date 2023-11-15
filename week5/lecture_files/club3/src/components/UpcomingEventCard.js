import Calendar from "../img/icons/calendarIcon.png";

function UpcomingEventCard(props) {
  return (
    <div className="m-5 w-11/12 rounded-lg bg-white p-5 text-yellow-700">
      <p className="pl-5 pt-5 text-6xl font-bold">{props.info.name}</p>
      <div className="flex p-2.5">
        {/* Left */}
        <div className="w-3/4 p-4 ">
          <p className="pb-8 text-3xl">{props.info.description}</p>
          <div className="flex">
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-lime-500">
              <span className="text-2xl text-white">{props.info.month}</span>
              <span className="text-7xl text-white">{props.info.day}</span>
            </div>
            <div className="ml-5 flex flex-col">
              <span className="pt-1.5 text-3xl">{props.info.time}</span>
              <span className="pt-1.5 text-3xl">{props.info.location}</span>
              <span className="pt-1.5 text-3xl">{props.info.price}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="mt-auto flex w-1/4 flex-col p-4">
          <div className="flex justify-between pb-4 text-3xl">
            <p>Spaces Left</p>
            <span>{props.info.spaces_left}</span>
          </div>
          <div className="flex justify-between pb-6 text-3xl">
            <p>Registered</p>
            <span>{props.info.registered}</span>
          </div>
          <div className="flex justify-between text-3xl">
            <button className="rounded-lg bg-lime-500 px-8 py-5 text-white transition-colors duration-300 hover:bg-lime-600">
              Register
            </button>
            <button className="flex h-20 items-center rounded-lg bg-lime-500 p-5 hover:bg-lime-600">
              <img src={Calendar}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEventCard;
