// Calendar.tsx
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addMonths, subMonths, isToday } from 'date-fns';
import './calendar.css'
const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const today = new Date();

    const startOfCurrentMonth = startOfMonth(currentMonth);
    const endOfCurrentMonth = endOfMonth(currentMonth);
    const startOfCurrentWeek = startOfWeek(startOfCurrentMonth);
    const endOfCurrentWeek = endOfWeek(endOfCurrentMonth);

    const days = eachDayOfInterval({ start: startOfCurrentWeek, end: endOfCurrentWeek });

    const handlePreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    return (
      <div className='w-[320px] md:w-[229px] lg:w-[270px] mx-auto mt-2'>
          <div className="calendar">
            <div className="calendar-header">
                <button onClick={handlePreviousMonth}>&lt;</button>
                <span>{format(currentMonth, 'MMMM yyyy')}</span>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className="calendar-grid">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri','Sat'].map((day) => (
                    <div key={day} className="calendar-cell header text-[10px] md:text-[6px] lg:text-[10px] font-bold ">{day}</div>
                ))}
                {days.map((day) => (
                    <div
                        key={day.toString()}
                        className={`calendar-cell text-[10px] md:text-[8px] lg:text-[10px] ${isToday(day) ? 'today' : ''}`}
                    >
                        {format(day, 'd')}
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
};

export default Calendar;
