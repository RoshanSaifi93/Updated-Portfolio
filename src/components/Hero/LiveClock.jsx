import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const currentDate = time.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <>
      <h3 className="text-sm text-gray-400">Local Time</h3>

      <p className="text-3xl font-bold mt-3">{currentTime}</p>

      <p className="text-gray-400 mt-2">{currentDate}</p>

      <p className="text-purple-400 mt-1">Ghaziabad 🇮🇳</p>
    </>
  );
}

export default LiveClock;
