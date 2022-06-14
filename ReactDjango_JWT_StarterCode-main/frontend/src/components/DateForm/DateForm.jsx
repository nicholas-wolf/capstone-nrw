import React from 'react';

import "./DateForm.css";



export default function DateForm ({date, setDate}) {

  return (
    <div>
      <div className='dateBox'>
        <label className='dateLabel'>Excursion Date</label>
        <input
        type="date" 
        date={date}
        id="excursionDate" 
        name="excursionDate" 
        selected={date}
        onChange={(event) => {setDate(event.target.value)}}
        ></input>
      </div>
    </div>
  );
};
