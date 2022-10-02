import React from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(moveClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const moveClock = () => {
    setCurrentTime(new Date());
  };

  return (
    <div className={"card"}>
      <div className={"card-header"}>
        <span className={"h6"}>Current Time</span>
        {": "}
        <span className={"text-caption"}>
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </span>
      </div>
      <div className={"card-body text-center time"}>
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Clock;
