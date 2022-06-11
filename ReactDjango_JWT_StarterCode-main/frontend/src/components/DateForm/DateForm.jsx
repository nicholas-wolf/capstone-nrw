import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  input: {
    fontFamily: "sans-serif",
    color: "white",
    fontSize: "16px",
    height: "50px",
    "& .react-date-picker__wrapper": {
      padding: "0 25px",
      borderColor: "#ccc",
      borderRadius: "4px",     
    },
    "& .react-date-picker__inputGroup__input": {
      color: "white"
    },
    "& .makeStyles-input-37 .react-date-picker__button svg": {
      color: "white"
    },
    "& .react-date-picker--open": {
      borderColor: "red"
    }
  },
  label: {
    color: 'white',
    marginTop: "-10 rem",
    marginLeft: "12px",
    zIndex: "2000",
    fontSize: "15px",
    fontFamily: "sans-serif",
    paddingLeft: "10px",
    display: "flex",
  }
});


export default function DateForm ({date, setDate}) {
  const classes = useStyles();

  return (
    <div>
      <div>
        <label className={classes.label}>Excursion Date</label>
        <input 
        className={"datePicker"} 
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
