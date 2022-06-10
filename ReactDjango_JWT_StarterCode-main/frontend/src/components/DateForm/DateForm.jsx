import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import { default as DatePick } from "react-date-picker";

const useStyles = makeStyles({
  input: {
    fontFamily: "sans-serif",
    color: "white",
    fontSize: "14px",
    height: "50px",
    "& .react-date-picker__wrapper": {
      padding: "0 10px",
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
    width: "58px",
    marginTop: "-10 rem",
    marginLeft: "12px",
    zIndex: "2000",
    fontSize: "13px",
    fontFamily: "sans-serif",
    paddingLeft: "10px",
    display: "flex",
  }
});


export default function DateForm({ date, setDate}) {
  const classes = useStyles();
  const [value, onChange] = useState(new Date("02/22/2021"));

  return (
    <div>
      <div>
        <label className={classes.label}>Excursion Date</label>
        <DatePick
          sx={{marginBottom:'10rem', color:'white'}}
          minDate={new Date()}
          value={value}
          onChange={onChange}
          className={classes.input}
        />
      </div>
    </div>
  );
}
