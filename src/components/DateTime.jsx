import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return (
    <div>
      {dateTime.toLocaleDateString(undefined, options).replace(',', '')}
    </div>
  );
}

export default DateTime