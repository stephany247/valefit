import { useState, useEffect } from "react";
import { weeklySchedule } from "../../data/workouts";
import flexibleSchedule from "../../assets/rectangle.svg";

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function ScheduleSection() {
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    const today = new Date().getDay();
    setSelectedDay(days[today]);
  }, []);

  return (
    <section className="space-y-4">
      <div className="container py-8">
        <span className="flex flex-col gap-1 w-fit">
          <i className="capitalize">Flexible schedule</i>
          <img src={flexibleSchedule} alt="Flexible Schedule illustration" />
        </span>
        <h2 className="font-bold text-xl w-4/5">
          FLEXIBLE WORKOUT SCHEDULE THAT SUITS YOUR TIME
        </h2>
      </div>

      <div className="bg-primary p-6">
        {/* Day selector */}
        <div className="container px-0 flex flex-wrap md:flex-nowrap gap-2 items-center justify-center md:justify-between md:bg-muted text-center text-sm font-semibold">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`p-2 uppercase md:w-full ${
                selectedDay === day
                  ? "bg-muted text-primary"
                  : "bg-black text-muted"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule display */}
        {selectedDay && <Schedule day={selectedDay} />}
      </div>
    </section>
  );
}

function Schedule({ day }) {
  const schedule = weeklySchedule[day];
  if (!schedule) return <p>No schedule available for {day}</p>;

  return (
    <div className="container bg-muted p-6 space-y-8 grid sm:grid-cols-2 md:grid-cols-3">
      {schedule.map((workout, i) => (
        <div key={i} className="space-y-3">
          <h3 className="text-xl font-semibold">{workout.name}</h3>
          <ul className="space-y-3">
            {workout.sessions.map((session, j) => (
              <li key={j}>
                <p>{session.time}</p>
                <p>{session.activity}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ScheduleSection;
