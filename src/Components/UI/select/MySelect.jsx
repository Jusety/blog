import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} className={classes.MySelect} onChange={e=>onChange(e)}>
           <option disabled value="" >{defaultValue}</option>
           {options.map(option=>{
            return <option key={option.value} value={option.value}>{option.name}</option>
           })} 
        </select>
   )
};

export default MySelect;
