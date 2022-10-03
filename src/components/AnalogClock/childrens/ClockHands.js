import {
  getHourHandRotationAngle,
  getMinuteHandRotationAngle,
  getSecondHandRotationAngle,
} from "../../../helpers/clock";

export default function ClockHands({ date }) {
  const rotationAngles = {
    hours: getHourHandRotationAngle(date),
    minutes: getMinuteHandRotationAngle(date),
    seconds: getSecondHandRotationAngle(date),
  };

  return (
    <>
      <div
        className="hour-hand"
        style={{
          transform: `rotateZ(${rotationAngles.hours}deg)`,
        }}
      />
      <div
        className="minute-hand"
        style={{
          transform: `rotateZ(${rotationAngles.minutes}deg)`,
        }}
      />
      <div
        className="second-hand"
        style={{
          transform: `rotateZ(${rotationAngles.seconds}deg)`,
        }}
      />
    </>
  );
}
