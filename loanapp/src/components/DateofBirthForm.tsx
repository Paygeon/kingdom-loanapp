import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const date = new Date();

const MONTHS_WITH_30_DAYS = [9,4,6,11]
function checkLeapYear(year:number): boolean{
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

const getDays = (month:number,year:number)=>{
  if(month === 2){
    const isLeapYear = checkLeapYear(year);
    const leapYearMonth = new Array(29).fill("").map((el,i)=>i + 1)
    const normalMonth = new Array(28).fill("").map((el,i)=>i + 1)
    return isLeapYear?leapYearMonth:normalMonth
  }
  if(MONTHS_WITH_30_DAYS.includes(month)){
    return new Array(30).fill("").map((el,i)=>i + 1)
  }
  return new Array(31).fill("").map((el,i)=>i + 1)
}
const monthOptions = new Array(12).fill("").map((e,i)=>i+1)
const yearOptions = new Array(100).fill("").map((e,i)=>(date.getFullYear() -(i+1)))

const DateOfBirthForm: React.FC = () => {
  const {dateOfBirth,setDateOfBirth} = useContext(DataContext)

  const [month, setMonth] = useState<number>(date.getMonth() + 1);
  const [day, setDay] = useState<number>(date.getDate());
  const [year, setYear] = useState<number>(date.getFullYear() - 18);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseFloat(event.target.value));
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(parseFloat(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(event.target.value));
  };

  useEffect(() => {
    setDateOfBirth(`${month}-${day}-${year}`)
  },[month,day,year,setDateOfBirth])
  // const handleSubmit = () => {
  //   // Handle form submission
  // };

  const verifyForm= ()=>{
    if(!dateOfBirth){
      return {
        isValid:false,
        message:"please add ssn number",
      }
    }
    return {
      isValid:true,
      message:null
    }
  }

  return (
    <>
    <div className="form-aba">
      <h2>What's your Date of Birth?</h2>
      <div className="">
        <div className="">
          <div className="">
            <label htmlFor="mon-bwd">Month</label>
            <select className="w-full p-4 rounded-md" onChange={handleMonthChange} value={month} name="" id="">
              {monthOptions.map(option=>(
                <option value={option}>{option}</option>
              ))}
            </select>
            {/* <input
              type="text"
              id="mon-bwd"
              name="month-What's your Date of Birth?"
              placeholder="MM"
              value={month}
              onChange={handleMonthChange}
              className="border border-gray-400 rounded-md p-2"
            /> */}
          </div>
          <div className="">
            <label htmlFor="" style={{color:"white"}}>Day</label><br />
            <select className="w-full p-4 rounded-md" onChange={handleDayChange} value={day} name="" id="">
              {getDays(month,year).map(option=>(
                <option value={option}>{option}</option>
              ))}
            </select>
            {/* <input
              type="text"
              id="day-cgo"
              name="day-What's your Date of Birth?"
              placeholder="DD"
              value={day}
              onChange={handleDayChange}
              className="border border-gray-400 rounded-md p-2"
            /> */}
          </div>
          <div className="">
            <label htmlFor="" style={{color:"white"}}>Year</label><br />
            <select className="w-full p-4 rounded-md" onChange={handleYearChange} name="" id="" value={year}>
              {yearOptions.map(option=>(
                <option value={option}>{option}</option>
              ))}
            </select>
            {/* <input
              type="text"
              id="yea-hfb"
              name="year-What's your Date of Birth?"
              placeholder="YYYY"
              value={year}
              onChange={handleYearChange}
              className="border border-gray-400 rounded-md p-2"
            /> */}
          </div>
        </div>
        <span className="error-jsj"></span>
      </div>
      <br /><br />
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default DateOfBirthForm;
