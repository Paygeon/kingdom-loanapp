import React, { useState } from 'react';

const DateOfBirthForm: React.FC = () => {
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="form-aba">
      <h2>What's your Date of Birth?</h2>
      <div className="wrapper-aj3">
        <div className="dates-o8w">
          <div className="date-l36">
            <label htmlFor="mon-bwd">Month</label>
            <input
              type="text"
              id="mon-bwd"
              name="month-What's your Date of Birth?"
              placeholder="MM"
              value={month}
              onChange={handleMonthChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="date-l36">
            <label htmlFor="day-cgo">Day</label>
            <input
              type="text"
              id="day-cgo"
              name="day-What's your Date of Birth?"
              placeholder="DD"
              value={day}
              onChange={handleDayChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="date-l36">
            <label htmlFor="yea-hfb">Year</label>
            <input
              type="text"
              id="yea-hfb"
              name="year-What's your Date of Birth?"
              placeholder="YYYY"
              value={year}
              onChange={handleYearChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
        </div>
        <span className="error-jsj"></span>
      </div>
    </div>
  );
};

export default DateOfBirthForm;
