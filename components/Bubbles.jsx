import React, { useCallback, useEffect } from 'react';
import styles from './Bubbles.module.css';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';

const Bubbles = ({weekData, currentDay, onClickDay}) => {
    const dateWithoutYear = (date) => {
        if (date) {
            const parts = date.split('-');

            const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

            const strMonth = months[parseInt(parts[1]) + 1];

            return `${strMonth} ${parts[2]}`;
        } else {
            return '';
        }
    }

    const day1Label = dateWithoutYear(Object.keys(weekData)[0]);
    const day7Label = dateWithoutYear(Object.keys(weekData)[6]);

    const handleDayClick = useCallback((idx) => {
        onClickDay(idx - 1);
    });

    return(
        <div className={styles.Bubbles}>
            <div className="weekOf mb-2">Week of: {day1Label} - {day7Label}</div>
            <div className={`dayGrid chosen-${currentDay}`}>
                <div className="day day-1" onClick={() => handleDayClick(1)}><div className="circle"><i>M</i></div></div>
                <div className="day day-2" onClick={() => handleDayClick(2)}><div className="circle"><i>T<span className="small">u</span></i></div></div>
                <div className="day day-3" onClick={() => handleDayClick(3)}><div className="circle"><i>W</i></div></div>
                <div className="day day-4"  onClick={() => handleDayClick(4)}><div className="circle"><i>T<span className="small">h</span></i></div></div>
                <div className="day day-5" onClick={() => handleDayClick(5)}><div className="circle"><i>F</i></div></div>
                <div className="day day-6"  onClick={() => handleDayClick(6)}><div className="circle"><i>S<span className="small">a</span></i></div></div>
                <div className="day day-7" onClick={() => handleDayClick(7)}><div className="circle"><i>S<span className="small">u</span></i></div></div>
            </div>
        </div>
    );
}

export default Bubbles;