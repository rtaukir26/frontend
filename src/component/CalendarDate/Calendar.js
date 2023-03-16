import { useState, useEffect } from "react";
import "./calendar.scss";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calendarr = () => {
  const [calendar, setCalendar] = useState("");
  
  const handleSelect = (date) => {
    setCalendar(format(date, "yyyy-MM-dd"));
  };
  
  useEffect(() => {
    setCalendar(format(new Date(), "yyyy-MM-dd"));
  });

  return (
    <div className="calendarWrap">
      <input value={calendar} readOnly className="inputBox"   />

      <Calendar
        className="calendarElement"
        date={new Date()}
        onChange={handleSelect}
      />
    </div>
  );
};

export default Calendarr;
