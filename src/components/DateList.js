import React from 'react';
import Date from './Date';

const DateList = ({date, deleteDate}) => {
  
  const message = Object.keys(date).length === 0 ? 'No hay citas' : 'Administrar citas';
  return (
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">
              {message}
            </h2>
            <div className="dates-list">
              {date.map(date => (
                  <Date
                    key={date.id}
                    date={date}
                    deleteDate={deleteDate}
                  />
              ))}
            </div>   
        </div>
    </div>

  );
}

export default DateList;