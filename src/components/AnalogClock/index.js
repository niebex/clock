import * as React from "react";
import ClockHands from "./childrens/ClockHands";
import ClockHours from "./childrens/ClockHours";

export default function AnalogClock() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <ClockHands date={date} />
      <span className="center-dot" />
      <ClockHours />
    </div>
  );
}
