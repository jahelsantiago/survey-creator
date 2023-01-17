import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type props = {
  onChange: (date: Date) => void;
}

function DateSelector({onChange}: props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="relative w-fit">
      <DatePicker
        className="bg-white rounded-md border border-gray-300 py-2 px-4"
        selected={startDate}
        onChange={(date:Date)=>{
          setStartDate(date);
          onChange(date);
        }}
      />
      <button className="absolute right-0 top-0 m-2">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  );
}

export default DateSelector;


